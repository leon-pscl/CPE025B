import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Team Name</Text>
      <View>
        <Text style={styles.memberBlue}>Ken Leonard Pascual</Text>
        <Button title="Tap me!" color="green" />
      </View>
      <Text style={styles.memberRed}>Member 2</Text>
      <Text style={styles.memberRed}>Member 3</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  member: {
    margin: 16,
    padding: 16,
  },
  memberBlue: {
    margin: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'blue',
  },
  memberRed: {
    margin: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'red',
  },
  textStyle: {
    backgroundColor: 'blue',
    color: 'white',
    margin: 16,
    padding: 16,
  },
});
