import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function GoalItem({ text, index, onDelete }) {
  return (
    <View style={styles.goalItem}>
      <View style={styles.goalIndex}>
        <Text style={styles.goalIndexText}>{index + 1}</Text>
      </View>
      <Text style={styles.goalText}>{text}</Text>
      <Pressable
        onPress={onDelete}
        style={({ pressed }) => [
          styles.deleteButton,
          pressed && styles.deleteButtonPressed,
        ]}
      >
        <MaterialIcons name="delete-outline" size={22} color="#e94560" />
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#e94560',
  },
  goalIndex: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#e94560',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  goalIndexText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  goalText: {
    flex: 1,
    color: '#e0e0e0',
    fontSize: 15,
    lineHeight: 21,
  },
  deleteButton: {
    padding: 6,
    borderRadius: 8,
  },
  deleteButtonPressed: {
    backgroundColor: '#1a1a2e',
    transform: [{ scale: 0.9 }],
    opacity: 0.7,
  },
});