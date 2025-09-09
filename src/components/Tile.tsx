import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { GameTile } from '../types/models';

interface Props {
  tile: GameTile;
  disabled?: boolean;
  onPress: () => void;
}

const teamColors: Record<'A' | 'B', string> = {
  A: '#1e88e5',
  B: '#e53935'
};

const Tile: React.FC<Props> = ({ tile, disabled, onPress }) => {
  const bg = teamColors[tile.team_tag];
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.tile, { backgroundColor: bg, opacity: disabled ? 0.3 : 1 }]}
    >
      <Text style={styles.text}>{tile.points}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tile: {
    width: 60,
    height: 60,
    marginVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default Tile;
