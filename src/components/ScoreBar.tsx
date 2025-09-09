import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
}

const ScoreBar: React.FC<Props> = ({ teamA, teamB, scoreA, scoreB }) => (
  <View style={styles.container}>
    <Text style={styles.team}>{teamA}: {scoreA}</Text>
    <Text style={styles.team}>{teamB}: {scoreB}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    padding: 8,
    backgroundColor: '#fafafa'
  },
  team: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ScoreBar;
