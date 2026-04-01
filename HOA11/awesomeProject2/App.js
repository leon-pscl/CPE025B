import GoalItem from './components/GoalItem.js';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, StatusBar } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    setEnteredGoalText('');
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
      <View style={styles.inputCard}>
        <Text style={styles.inputLabel}>ADD A NEW GOAL</Text>
        <TextInput
          style={styles.textInput}
          placeholder="What do you want to achieve?"
          placeholderTextColor="#888"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonWrapper}>
          <Button title="+ Add Goal" onPress={addGoalHandler} color="#e94560" />
        </View>
      </View>

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
  inputCard: {
    backgroundColor: '#16213e',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#0f3460',
  },
  inputLabel: {
    fontSize: 11,
    color: '#e94560',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: '#0f3460',
    color: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 12,
  },
  buttonWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
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
  },
  goalsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#e94560',
  },
  goalIndex: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#e94560',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  goalIndexText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  goalText: {
    flex: 1,
    color: '#e0e0e0',
    fontSize: 15,
    lineHeight: 21,
  },
});