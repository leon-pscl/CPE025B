import { useState } from 'react';
import { StyleSheet, View, StatusBar, Pressable, Text } from 'react-native';
import GoalHeader from './components/GoalHeader';
import GoalInput from './components/GoalInput';
import GoalCounter from './components/GoalCounter';
import GoalList from './components/GoalList';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  };

  function deleteGoalHandler(key) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.key !== key)
    );
  };

  function openModalHandler() {
    setModalIsVisible(true);
  };

  function closeModalHandler() {
    setModalIsVisible(false);
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      <GoalHeader />
      <Pressable
        onPress={openModalHandler}
        style={({ pressed }) => [
          styles.openButton,
          pressed && styles.openButtonPressed,
        ]}
      >
        <Text style={styles.openButtonText}>+ Add New Goal</Text>
      </Pressable>
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onClose={closeModalHandler}
      />
      <GoalCounter count={courseGoals.length} />
      <GoalList goals={courseGoals} onDeleteGoal={deleteGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    paddingTop: 48,
  },
  openButton: {
    backgroundColor: '#e94560',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  openButtonPressed: {
    backgroundColor: '#c73652',
    transform: [{ scale: 0.97 }],
    opacity: 0.85,
  },
  openButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});