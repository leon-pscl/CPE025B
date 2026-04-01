import { View, Text, StyleSheet } from 'react-native';

function GoalItem({ text, index }) {
  return (
    <View style={styles.goalItem}>
      <View style={styles.goalIndex}>
        <Text style={styles.goalIndexText}>{index + 1}</Text>
      </View>
      <Text style={styles.goalText}>{text}</Text>
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
});