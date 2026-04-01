import { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

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
    <View style={styles.inputCard}>
      <TextInput
        style={styles.textInput}
        placeholder="What do you want to achieve?"
        placeholderTextColor="#888"
        onChangeText={textInputHandler}
        value={enteredGoalText}
      />
      <Pressable
        onPress={addGoalHandler}
        onLongPress={() => console.log('Long pressed!')}
        onPressIn={() => console.log('Press started!')}
        onPressOut={() => console.log('Press released!')}
        delayLongPress={500}
        android_ripple={{ color: '#c73652', borderless: false }}
        style={({ pressed, hovered }) => [
          styles.addButton,
          pressed && styles.addButtonPressed,
          hovered && styles.addButtonHovered,
        ]}
      >
        <Text style={styles.addButtonText}>+ Add Goal</Text>
      </Pressable>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputCard: {
    backgroundColor: '#16213e',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#0f3460',
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
  addButton: {
    backgroundColor: '#e94560',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  addButtonPressed: {
    backgroundColor: '#c03e3e',
    transform: [{ scale: 0.97 }],
    opacity: 0.85,
  },
  addButtonHovered: {
    backgroundColor: '#ff6b81',
    transform: [{ scale: 1.02 }],
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});