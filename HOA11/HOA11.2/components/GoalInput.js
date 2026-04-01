import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

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
      <View style={styles.buttonWrapper}>
        <Button title="+ Add Goal" onPress={addGoalHandler} color="#e94560" />
      </View>
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
  buttonWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});