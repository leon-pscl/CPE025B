import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Image,
  TouchableHighlight,
  BackHandler,
  Keyboard,
} from 'react-native';
import Animated from 'react-native-reanimated';
import Status from './components/Status';
import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';
import ImageGrid from './components/ImageGrid';
import {
  createImageMessage,
  createTextMessage,
} from './utils/MessageUtils';

const AnimatedView = Animated.View;

export default class App extends React.Component {
  state = {
    messages: [
      createImageMessage('https://unsplash.it/300/300'),
      createTextMessage('World'),
      createTextMessage('Hello'),
    ],
    fullscreenImageId: null,
    isInputFocused: false,
  };

  componentDidMount() {
    this.subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        const { fullscreenImageId } = this.state;
        if (fullscreenImageId) {
          this.dismissFullscreenImage();
          return true;
        }
        return false;
      }
    );
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  dismissFullscreenImage = () => {
    this.setState({ fullscreenImageId: null });
  };

  handlePressCamera = () => {
    this.setState({ isInputFocused: false });
  };

  handlePressLocation = () => {
    this.setState({ isInputFocused: false });
  };

  handleChangeFocus = (isFocused) => {
    this.setState({ isInputFocused: isFocused });
  };

  handlePressMessage = ({ id, type }) => {
    switch (type) {
      case 'text':
        Alert.alert(
          'Delete Message',
          'Are you sure you want to delete this message?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Delete',
              style: 'destructive',
              onPress: () => this.deleteMessage(id),
            },
          ],
        );
        break;
      case 'image':
        Keyboard.dismiss();
        this.setState({ fullscreenImageId: id });
        break;
      default:
        break;
    }
  };

  deleteMessage = (id) => {
    const { messages } = this.state;
    this.setState({
      messages: messages.filter((message) => message.id !== id),
    });
  };

  renderMessageList() {
    const { messages } = this.state;

    return (
      <AnimatedView style={styles.content}>
        <MessageList
          messages={messages}
          onPressMessage={this.handlePressMessage}
        />
      </AnimatedView>
    );
  }

  renderFullscreenImage = () => {
    const { messages, fullscreenImageId } = this.state;

    if (!fullscreenImageId) return null;

    const image = messages.find(
      (message) => message.id === fullscreenImageId
    );

    if (!image) return null;

    const { uri } = image;

    return (
      <TouchableHighlight
        style={styles.fullscreenOverlay}
        onPress={this.dismissFullscreenImage}
      >
        <Image
          style={styles.fullscreenImage}
          source={{ uri }}
        />
      </TouchableHighlight>
    );
  };

  renderToolbar() {
    const { isInputFocused } = this.state;
    return (
      <AnimatedView style={styles.toolbar}>
        <Toolbar
          isFocused={isInputFocused}
          onChangeFocus={this.handleChangeFocus}
          onPressCamera={this.handlePressCamera}
          onPressLocation={this.handlePressLocation}
          onSubmit={this.handleSubmit}
        />
      </AnimatedView>
    );
  }

  handleSubmit = (text) => {
    this.setState({
      messages: [createTextMessage(text), ...this.state.messages],
    });
  };

  renderInputMethodEditor() {
    return (
      <AnimatedView style={styles.inputMethodEditor}>
        <ImageGrid />
      </AnimatedView>
    );
  }

  render() {
    return (
      <AnimatedView style={styles.container}>
        <Status />
        {this.renderMessageList()}
        {this.renderToolbar()}
        {this.renderInputMethodEditor()}
        {this.renderFullscreenImage()}
      </AnimatedView>
    );
  }
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
  fullscreenOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    zIndex: 2,
  },
  fullscreenImage: {
    flex: 1,
    resizeMode: 'contain',
  },
});