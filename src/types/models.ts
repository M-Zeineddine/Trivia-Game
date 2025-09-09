export type TeamTag = 'A' | 'B';

export interface Category {
  id: string;
  name_ar: string;
}

export interface Question {
  id: string;
  category_id: string;
  text_ar: string;
  team_tag: TeamTag;
  points: number;
}

export interface Game {
  id: string;
  team_a_name: string;
  team_b_name: string;
  team_a_score: number;
  team_b_score: number;
  timer_seconds: number;
  current_turn: TeamTag;
  status: 'active' | 'ended';
}

export interface GameCategory {
  id: string;
  game_id: string;
  category_id: string;
  col_index: number;
  category_name: string;
}

export interface GameTile {
  id: string;
  game_id: string;
  category_id: string;
  team_tag: TeamTag;
  points: number;
  question_id: string;
  question_text: string;
  is_used: boolean;
}
