import 'dotenv/config';

export default () => ({
  expo: {
    name: 'Trivia Game',
    slug: 'trivia-game',
    version: '1.0.0',
    orientation: 'portrait',
    entryPoint: './app/App.tsx',
    extra: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
      useFirebase: process.env.USE_FIREBASE === 'true'
    }
  }
});
