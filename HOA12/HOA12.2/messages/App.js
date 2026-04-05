import { useState } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Status from './components/Status';
import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';
import ImageGrid from './components/ImageGrid';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Status />
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <MessageList messages={messages} />
        <View style={styles.toolbar}>
          <Toolbar
            isFocused={isInputFocused}
            onChangeFocus={setIsInputFocused}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.inputMethodEditor}>
        <ImageGrid />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: 'white',
  },
});