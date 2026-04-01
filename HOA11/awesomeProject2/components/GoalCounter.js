import { View, Text, StyleSheet } from 'react-native';

function GoalCounter({ count }) {
  return (
    <View style={styles.countRow}>
      <Text style={styles.countText}>
        {count === 0
          ? 'No goals yet — add one above!'
          : `${count} goal${count > 1 ? 's' : ''} set`}
      </Text>
    </View>
  );
}

export default GoalCounter;

const styles = StyleSheet.create({
  countRow: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 8,
  },
  countText: {
    color: '#888',
    fontSize: 12,
    letterSpacing: 0.5,
  },
});