import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MessageShape } from '../utils/MessageUtils';

const keyExtractor = item => item.id.toString();

export default class MessageList extends React.Component {
  static propTypes = {
    messages: PropTypes.arrayOf(MessageShape).isRequired,
    onPressMessage: PropTypes.func,
  };

  static defaultProps = {
    onPressMessage: () => {},
  };

  renderMessageItem = ({ item }) => {
    const { onPressMessage } = this.props;

    return (
      <View key={item.id} style={styles.messageRow}>
        <TouchableOpacity onPress={() => onPressMessage(item)}>
          {this.renderMessageBody(item)}
        </TouchableOpacity>
      </View>
    );
  };

  renderMessageBody = ({ type, text, uri, coordinate }) => {
    switch (type) {
      case 'text':
        return (
          <View style={styles.messageBubble}>
            <Text style={styles.messageBubbleText}>{text}</Text>
          </View>
        );
      case 'image':
        return (
          <Image
            style={styles.messageImage}
            source={{ uri }}
          />
        );
      case 'location':
        return (
          <Image
            style={styles.mapMessage}
            source={{
              uri: `https://maps.googleapis.com/maps/api/staticmap?center=${coordinate.latitude},${coordinate.longitude}&zoom=13&size=300x300&markers=color:red%7C${coordinate.latitude},${coordinate.longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`,
            }}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const { messages } = this.props;

    return (
      <FlatList
        style={styles.container}
        inverted
        data={messages}
        renderItem={this.renderMessageItem}
        keyExtractor={keyExtractor}
        keyboardShouldPersistTaps={'handled'}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'visible',
  },
  messageRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 60,
  },
  messageBubble: {
    backgroundColor: '#0084FF',
    borderRadius: 20,
    padding: 10,
    marginVertical: 4,
    marginRight: 10,
  },
  messageBubbleText: {
    color: 'white',
    fontSize: 16,
  },
  messageImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginVertical: 4,
    marginRight: 10,
  },
  mapMessage: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginVertical: 4,
    marginRight: 10,
  },
});