import { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import GoalHeader from './components/GoalHeader';
import GoalInput from './components/GoalInput';
import GoalCounter from './components/GoalCounter';
import GoalList from './components/GoalList';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <GoalHeader />
      <GoalInput onAddGoal={addGoalHandler} />
      <GoalCounter count={courseGoals.length} />
      <GoalList goals={courseGoals} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    paddingTop: 48,
  },
});