import create from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BoardColumn } from '../lib/board';
import { TeamTag } from '../types/models';

interface GameStore {
  selectedCategories: string[];
  gameId: string | null;
  board: BoardColumn[];
  teamAName: string;
  teamBName: string;
  teamAScore: number;
  teamBScore: number;
  timerSeconds: number;
  currentTurn: TeamTag;
  setSelectedCategories: (ids: string[]) => void;
  setGame: (gameId: string, board: BoardColumn[], meta: { teamA: string; teamB: string; timer: number; turn: TeamTag; scoreA: number; scoreB: number; }) => void;
  updateTile: (tileId: string, isUsed: boolean) => void;
  addScore: (team: TeamTag, points: number) => void;
  switchTurn: () => void;
  reset: () => void;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      selectedCategories: [],
      gameId: null,
      board: [],
      teamAName: 'الفريق أ',
      teamBName: 'الفريق ب',
      teamAScore: 0,
      teamBScore: 0,
      timerSeconds: 45,
      currentTurn: 'A',
      setSelectedCategories: (ids) => set({ selectedCategories: ids }),
      setGame: (gameId, board, meta) =>
        set({
          gameId,
          board,
          teamAName: meta.teamA,
          teamBName: meta.teamB,
          timerSeconds: meta.timer,
          currentTurn: meta.turn,
          teamAScore: meta.scoreA,
          teamBScore: meta.scoreB
        }),
      updateTile: (tileId, isUsed) =>
        set({
          board: get().board.map((col) => ({
            ...col,
            tiles: col.tiles.map((t) =>
              t.id === tileId ? { ...t, is_used: isUsed } : t
            )
          }))
        }),
      addScore: (team, points) =>
        set(
          team === 'A'
            ? { teamAScore: get().teamAScore + points }
            : { teamBScore: get().teamBScore + points }
        ),
      switchTurn: () =>
        set({ currentTurn: get().currentTurn === 'A' ? 'B' : 'A' }),
      reset: () =>
        set({
          selectedCategories: [],
          gameId: null,
          board: [],
          teamAScore: 0,
          teamBScore: 0,
          currentTurn: 'A'
        })
    }),
    {
      name: 'trivia-game-store',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);
