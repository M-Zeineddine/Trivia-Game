import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useGameStore } from '../state/gameStore';
import { useNavigation } from '@react-navigation/native';

const Summary: React.FC = () => {
  const { teamAName, teamBName, teamAScore, teamBScore, reset } =
    useGameStore();
  const navigation = useNavigation();

  const restart = () => {
    reset();
    navigation.reset({ index: 0, routes: [{ name: 'CategoryPicker' as never }] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{teamAName}: {teamAScore}</Text>
      <Text style={styles.text}>{teamBName}: {teamBScore}</Text>
      <Button title="لعبة جديدة" onPress={restart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  text: { fontSize: 24 }
});

export default Summary;
