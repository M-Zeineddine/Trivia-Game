import { GameCategory, GameTile } from '../types/models';

export interface BoardColumn {
  category: GameCategory;
  tiles: GameTile[];
}

export function buildBoard(
  categories: any[] = [],
  tiles: any[] = []
): BoardColumn[] {
  const cols: BoardColumn[] = [];
  categories.forEach((c) => {
    const columnTiles = tiles
      .filter((t) => t.category_id === c.category_id)
      .sort((a, b) => a.points - b.points);
    cols.push({
      category: {
        id: c.id,
        game_id: c.game_id,
        category_id: c.category_id,
        col_index: c.col_index,
        category_name: c.categories.name_ar
      },
      tiles: columnTiles.map((t) => ({
        id: t.id,
        game_id: t.game_id,
        category_id: t.category_id,
        team_tag: t.team_tag,
        points: t.points,
        question_id: t.question_id,
        question_text: t.questions.text_ar,
        is_used: t.is_used
      }))
    });
  });
  return cols;
}
