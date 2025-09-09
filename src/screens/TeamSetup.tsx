import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGameStore } from '../state/gameStore';
import { startGame, loadBoard } from '../lib/gameApi';
import { buildBoard } from '../lib/board';

const TeamSetup: React.FC = () => {
  const navigation = useNavigation();
  const selected = useGameStore((s) => s.selectedCategories);
  const setGame = useGameStore((s) => s.setGame);
  const [teamA, setTeamA] = useState('الفريق أ');
  const [teamB, setTeamB] = useState('الفريق ب');
  const [timer, setTimer] = useState('45');

  const handleStart = async () => {
    const gameId = await startGame(teamA, teamB, Number(timer), selected);
    if (gameId) {
      const { categories, tiles } = await loadBoard(gameId);
      const board = buildBoard(categories, tiles);
      setGame(gameId, board, {
        teamA,
        teamB,
        timer: Number(timer),
        turn: 'A',
        scoreA: 0,
        scoreB: 0
      });
      navigation.navigate('GameBoard' as never);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={teamA} onChangeText={setTeamA} />
      <TextInput style={styles.input} value={teamB} onChangeText={setTeamB} />
      <TextInput
        style={styles.input}
        value={timer}
        onChangeText={setTimer}
        keyboardType="numeric"
      />
      <Button title="ابدأ اللعبة" onPress={handleStart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    textAlign: 'right'
  }
});

export default TeamSetup;
