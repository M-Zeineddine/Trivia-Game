import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tile from './Tile';
import { GameTile } from '../types/models';

interface Props {
  name: string;
  tiles: GameTile[];
  currentTurn: 'A' | 'B';
  onSelect: (tile: GameTile) => void;
}

const CategoryColumn: React.FC<Props> = ({ name, tiles, currentTurn, onSelect }) => {
  return (
    <View style={styles.column}>
      <Text style={styles.title}>{name}</Text>
      {tiles.map((tile) => (
        <Tile
          key={tile.id}
          tile={tile}
          disabled={tile.is_used || tile.team_tag !== currentTurn}
          onPress={() => onSelect(tile)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
    alignItems: 'center',
    margin: 4
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333'
  }
});

export default CategoryColumn;
