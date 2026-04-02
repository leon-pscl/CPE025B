import { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Pressable, Text, Modal } from 'react-native';
import GoalHeader from './components/GoalHeader';
import GoalInput from './components/GoalInput';
import GoalCounter from './components/GoalCounter';
import GoalList from './components/GoalList';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);

  useEffect(() => {
    if (courseGoals.length > 5) {
      setWarningVisible(true);
    }
  }, [courseGoals]);

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

      {/* Warning Modal */}
      <Modal
        visible={warningVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setWarningVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.warningTitle}>Slow Down!</Text>
            <Text style={styles.warningMessage}>
              You have more than 5 goals on your list. Taking on too much at once
              can be overwhelming. Consider focusing on your most important goals
              first before adding more!
            </Text>
            <Pressable
              onPress={() => setWarningVisible(false)}
              style={({ pressed }) => [
                styles.warningButton,
                pressed && styles.warningButtonPressed,
              ]}
            >
              <Text style={styles.warningButtonText}>I Understand</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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

  // Warning Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#16213e',
    borderRadius: 20,
    padding: 32,
    width: '80%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e94560',
  },
  warningEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  warningTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e94560',
    marginBottom: 12,
    letterSpacing: 1,
  },
  warningMessage: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  warningButton: {
    backgroundColor: '#e94560',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  warningButtonPressed: {
    backgroundColor: '#c73652',
    transform: [{ scale: 0.97 }],
    opacity: 0.85,
  },
  warningButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});