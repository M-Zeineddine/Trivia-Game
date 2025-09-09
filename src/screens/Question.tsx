import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Timer from '../components/Timer';
import { useGameStore } from '../state/gameStore';
import { awardTile, skipTile, isGameComplete } from '../lib/gameApi';

const Question: React.FC = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const tileId: string = route.params.tileId;
  const store = useGameStore();
  const tile = store.board
    .flatMap((c) => c.tiles)
    .find((t) => t.id === tileId);
  if (!tile) return null;

  const handleFinish = async () => {
    await awardTile(tile.id, tile.team_tag, tile.points, store.gameId!);
    store.updateTile(tile.id, true);
    store.addScore(tile.team_tag, tile.points);
    store.switchTurn();
    const done = await isGameComplete(store.gameId!);
    if (done) {
      navigation.reset({ index: 0, routes: [{ name: 'Summary' as never }] });
    } else {
      navigation.goBack();
    }
  };

  const handleSkip = async () => {
    await skipTile(tile.id, store.gameId!, tile.team_tag);
    store.updateTile(tile.id, true);
    store.switchTurn();
    const done = await isGameComplete(store.gameId!);
    if (done) {
      navigation.reset({ index: 0, routes: [{ name: 'Summary' as never }] });
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{tile.question_text}</Text>
      <Timer seconds={store.timerSeconds} onEnd={handleSkip} />
      <View style={styles.buttons}>
        <Button title="انتهاء" onPress={handleFinish} />
        <Button title="تخطي" onPress={handleSkip} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
  question: { fontSize: 24, textAlign: 'center', marginBottom: 32 },
  buttons: { flexDirection: 'row-reverse', gap: 16 }
});

export default Question;
