import { useState } from 'react';
import { StyleSheet, View, StatusBar, Text, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

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

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Course Goals</Text>
        <Text style={styles.headerSubtitle}>Track what you want to achieve</Text>
      </View>

      {/* Input Area */}
      <GoalInput onAddGoal={addGoalHandler} />

      {/* Goals Count */}
      <View style={styles.countRow}>
        <Text style={styles.countText}>
          {courseGoals.length === 0
            ? 'No goals yet — add one above!'
            : `${courseGoals.length} goal${courseGoals.length > 1 ? 's' : ''} set`}
        </Text>
      </View>

      {/* Goals List */}
      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem text={itemData.item.text} index={itemData.index} />
          )}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    paddingTop: 48,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
    letterSpacing: 0.5,
  },
  countRow: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 8,
  },
  countText: {
    color: '#888',
    fontSize: 12,
    letterSpacing: 0.5,
  },
  goalListContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});