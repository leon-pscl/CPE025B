import { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet, Modal } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredText] = useState('');

  function textInputHandler(enteredText) {
    setEnteredText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredText('');
  };

  return (
    <Modal
      visible={props.visible}

      // TEST 1: try 'slide', 'fade', 'none' and observe the difference
      animationType="slide"

      // TEST 2: try true/false — when false the background is solid black
      transparent={true}

      // TEST 3: required on Android — try removing it and press back button
      onRequestClose={() => {
        console.log('Android back button pressed — closing modal');
        props.onClose();
      }}

      // TEST 4: fires when modal finishes appearing
      onShow={() => {
        console.log('Modal is now visible');
      }}

      // TEST 5: iOS only — try 'fullScreen', 'pageSheet', 'formSheet'
      presentationStyle="pageSheet"

      // TEST 6: Android only — modal renders under status bar
      statusBarTranslucent={true}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add a New Goal</Text>
          <TextInput
            style={styles.textInput}
            placeholder="What do you want to achieve?"
            placeholderTextColor="#888"
            onChangeText={textInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonRow}>
            <Pressable
              onPress={props.onClose}
              style={({ pressed }) => [
                styles.cancelButton,
                pressed && styles.cancelButtonPressed,
              ]}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={addGoalHandler}
              style={({ pressed }) => [
                styles.addButton,
                pressed && styles.addButtonPressed,
              ]}
            >
              <Text style={styles.addButtonText}>+ Add Goal</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#16213e',
    borderRadius: 20,
    padding: 24,
    width: '90%',
    borderWidth: 1,
    borderColor: '#0f3460',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  textInput: {
    backgroundColor: '#0f3460',
    color: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#0f3460',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  cancelButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },
  cancelButtonText: {
    color: '#888',
    fontSize: 15,
    fontWeight: 'bold',
  },
  addButton: {
    flex: 1,
    backgroundColor: '#e94560',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  addButtonPressed: {
    backgroundColor: '#c73652',
    transform: [{ scale: 0.97 }],
    opacity: 0.85,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});