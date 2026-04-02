import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function GoalHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.titleRow}>
        <Text style={styles.headerTitle}>Course Goals</Text>
        <MaterialIcons name="account-circle" size={36} color="#e94560" />
      </View>
      <Text style={styles.headerSubtitle}>Track what you want to achieve</Text>
    </View>
  );
}

export default GoalHeader;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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