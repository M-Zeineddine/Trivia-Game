# Arabic Trivia Game (Expo + Supabase)

## Prerequisites
- Node.js
- npm
- Expo CLI (`npm install -g expo-cli`)
- Supabase project

## Setup
1. Clone repo & install deps:
   ```sh
   npm install
   ```
2. Create a Supabase project and run the SQL in `schema.sql` then `seed.sql`.
3. Copy `.env.example` to `.env` and fill `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
4. Start Expo:
   ```sh
   npx expo start
   ```

## Testing checklist
- `npm test`
- App loads CategoryPicker; cannot proceed until 6 categories are chosen.
- TeamSetup lets you set names and timer; starting game creates DB rows.
- GameBoard shows 6 columns with team-colored tiles (200/400/600).
- Only current team's tiles are tappable; used tiles dim.
- Question screen counts down and Finish/Skip behave as expected; turn flips.
- After all 36 tiles used, Summary shows final scores.
- Killing the app mid-game and reopening resumes to the board.
- All UI is RTL with Arabic text.
