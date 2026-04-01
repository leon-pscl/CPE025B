import { View, Text, StyleSheet } from 'react-native';

function GoalHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Course Goals</Text>
      <Text style={styles.headerSubtitle}>Track what you want to achieve</Text>
    </View>
  );
}

export default GoalHeader;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
    letterSpacing: 0.5,
  },
});