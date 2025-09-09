import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  team: 'A' | 'B';
}

const TurnBadge: React.FC<Props> = ({ team }) => (
  <View style={styles.container}>
    <Text style={styles.text}>دور الفريق {team === 'A' ? 'أ' : 'ب'}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#ddd'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default TurnBadge;
