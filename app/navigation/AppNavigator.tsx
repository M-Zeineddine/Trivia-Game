import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryPicker from '../../src/screens/CategoryPicker';
import TeamSetup from '../../src/screens/TeamSetup';
import GameBoard from '../../src/screens/GameBoard';
import Question from '../../src/screens/Question';
import Summary from '../../src/screens/Summary';
import { useGameStore } from '../../src/state/gameStore';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  const gameId = useGameStore((s) => s.gameId);
  const initial = gameId ? 'GameBoard' : 'CategoryPicker';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initial} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CategoryPicker" component={CategoryPicker} />
        <Stack.Screen name="TeamSetup" component={TeamSetup} />
        <Stack.Screen name="GameBoard" component={GameBoard} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="Summary" component={Summary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
