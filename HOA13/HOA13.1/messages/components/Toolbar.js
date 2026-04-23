import { useState } from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Toolbar({ isFocused, onChangeFocus }) {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.toolbar}>
      <Pressable style={styles.iconButton}>
        <MaterialIcons name="photo" size={24} color="#888" />
      </Pressable>
      <Pressable style={styles.iconButton}>
        <MaterialIcons name="location-on" size={24} color="#888" />
      </Pressable>
      <TextInput
        style={styles.input}
        placeholder="Type something!"
        placeholderTextColor="#999"
        value={inputText}
        onChangeText={setInputText}
        onFocus={() => onChangeFocus(true)}
        onBlur={() => onChangeFocus(false)}
      />
      <Pressable style={styles.iconButton}>
        <MaterialIcons name="send" size={24} color="#4FC3F7" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  iconButton: {
    padding: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    marginHorizontal: 4,
  },
});