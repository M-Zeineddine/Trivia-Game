-- Supabase schema for Trivia Game
create extension if not exists "pgcrypto";

create table categories (
  id uuid primary key default gen_random_uuid(),
  name_ar text not null,
  is_active boolean default true
);

create table questions (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references categories(id) on delete cascade,
  text_ar text not null,
  team_tag text check (team_tag in ('A','B')),
  points int check (points in (200,400,600))
);

create table games (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  team_a_name text,
  team_b_name text,
  team_a_score int default 0,
  team_b_score int default 0,
  timer_seconds int default 45,
  current_turn text check (current_turn in ('A','B')) default 'A',
  status text check (status in ('active','ended')) default 'active'
);

create table game_categories (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references games(id) on delete cascade,
  category_id uuid references categories(id),
  col_index int check (col_index between 0 and 5),
  unique (game_id, col_index)
);

create table game_tiles (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references games(id) on delete cascade,
  category_id uuid references categories(id),
  team_tag text check (team_tag in ('A','B')),
  points int check (points in (200,400,600)),
  question_id uuid references questions(id),
  is_used boolean default false
);

create or replace function increment_score(game_id uuid, column_name text, amount int)
returns void language plpgsql as $$
begin
  execute format('update games set %I = %I + $1 where id=$2', column_name, column_name) using amount, game_id;
end;
$$;
