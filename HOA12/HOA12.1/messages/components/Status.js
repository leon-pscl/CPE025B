import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default function Status() {
  return (
    <View style={styles.statusBar}>
      <StatusBar backgroundColor="rgba(255,0,0,0)" barStyle="dark-content" />
      <Text style={styles.statusText}>Connected</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: '#4FC3F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});