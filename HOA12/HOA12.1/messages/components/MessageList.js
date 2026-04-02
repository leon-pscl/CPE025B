import { FlatList, View, Text, StyleSheet } from 'react-native';

export default function MessageList({ messages }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        inverted
        renderItem={({ item }) => (
          <View style={styles.messageBubble}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No messages yet</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageBubble: {
    backgroundColor: '#DCF8C6',
    borderRadius: 12,
    padding: 10,
    marginVertical: 4,
    alignSelf: 'flex-end',
    maxWidth: '75%',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  emptyText: {
    color: '#999',
    fontSize: 14,
  },
});