import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CategoryColumn from '../components/CategoryColumn';
import ScoreBar from '../components/ScoreBar';
import TurnBadge from '../components/TurnBadge';
import { useNavigation } from '@react-navigation/native';
import { useGameStore } from '../state/gameStore';
import { GameTile } from '../types/models';

const GameBoard: React.FC = () => {
  const navigation = useNavigation();
  const { board, teamAName, teamBName, teamAScore, teamBScore, currentTurn } =
    useGameStore();

  const handleSelect = (tile: GameTile) => {
    navigation.navigate('Question' as never, { tileId: tile.id } as never);
  };

  return (
    <View style={styles.container}>
      <ScoreBar
        teamA={teamAName}
        teamB={teamBName}
        scoreA={teamAScore}
        scoreB={teamBScore}
      />
      <TurnBadge team={currentTurn} />
      <ScrollView horizontal contentContainerStyle={styles.board}>
        {board.map((col) => (
          <CategoryColumn
            key={col.category.id}
            name={col.category.category_name}
            tiles={col.tiles}
            currentTurn={currentTurn}
            onSelect={handleSelect}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  board: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-start'
  }
});

export default GameBoard;
