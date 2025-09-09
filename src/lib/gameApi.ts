import { supabase } from './supabaseClient';
import { Category, Game, GameTile, TeamTag } from '../types/models';

// Start a new game with selected categories
export async function startGame(
  teamA: string,
  teamB: string,
  timer: number,
  categoryIds: string[]
): Promise<string | null> {
  const { data: game, error } = await supabase
    .from<Game>('games')
    .insert({ team_a_name: teamA, team_b_name: teamB, timer_seconds: timer })
    .select()
    .single();
  if (error || !game) return null;

  await Promise.all(
    categoryIds.map((catId, idx) =>
      supabase.from('game_categories').insert({
        game_id: game.id,
        category_id: catId,
        col_index: idx
      })
    )
  );

  // For each category, create tiles
  for (const catId of categoryIds) {
    const { data: questions } = await supabase
      .from('questions')
      .select('*')
      .eq('category_id', catId);
    const pairs: { team_tag: TeamTag; points: number }[] = [
      { team_tag: 'A', points: 200 },
      { team_tag: 'A', points: 400 },
      { team_tag: 'A', points: 600 },
      { team_tag: 'B', points: 200 },
      { team_tag: 'B', points: 400 },
      { team_tag: 'B', points: 600 }
    ];
    for (const p of pairs) {
      const q = questions?.find(
        (qq) => qq.team_tag === p.team_tag && qq.points === p.points
      );
      if (q) {
        await supabase.from('game_tiles').insert({
          game_id: game.id,
          category_id: catId,
          team_tag: p.team_tag,
          points: p.points,
          question_id: q.id
        });
      }
    }
  }

  return game.id;
}

export async function loadBoard(gameId: string) {
  const { data: categories } = await supabase
    .from('game_categories')
    .select('id, category_id, col_index, categories(name_ar)')
    .eq('game_id', gameId)
    .order('col_index');

  const { data: tiles } = await supabase
    .from('game_tiles')
    .select('*, questions(text_ar)')
    .eq('game_id', gameId);

  return { categories, tiles };
}

export async function awardTile(
  tileId: string,
  team: TeamTag,
  points: number,
  gameId: string
) {
  await supabase.from('game_tiles').update({ is_used: true }).eq('id', tileId);
  const column = team === 'A' ? 'team_a_score' : 'team_b_score';
  await supabase.rpc('increment_score', {
    game_id: gameId,
    column_name: column,
    amount: points
  });
  await supabase
    .from('games')
    .update({ current_turn: team === 'A' ? 'B' : 'A' })
    .eq('id', gameId);
}

export async function skipTile(tileId: string, gameId: string, team: TeamTag) {
  await supabase.from('game_tiles').update({ is_used: true }).eq('id', tileId);
  await supabase
    .from('games')
    .update({ current_turn: team === 'A' ? 'B' : 'A' })
    .eq('id', gameId);
}

export async function isGameComplete(gameId: string) {
  const { count } = await supabase
    .from('game_tiles')
    .select('*', { count: 'exact', head: true })
    .eq('game_id', gameId)
    .eq('is_used', false);
  if (count === 0) {
    await supabase.from('games').update({ status: 'ended' }).eq('id', gameId);
    return true;
  }
  return false;
}

// TODO: Firebase variant when USE_FIREBASE flag is true
