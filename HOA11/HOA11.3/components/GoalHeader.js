import { useState } from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function GoalHeader() {
  const [welcomeVisible, setWelcomeVisible] = useState(false);

  return (
    <View style={styles.header}>

      {/* Welcome Modal */}
      <Modal
        visible={welcomeVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setWelcomeVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <MaterialIcons name="account-circle" size={64} color="#e94560" />
            <Text style={styles.welcomeTitle}>Welcome!</Text>
            <Text style={styles.welcomeMessage}>
              Ready to crush your course goals today? Let's get started!
            </Text>
            <Pressable
              onPress={() => setWelcomeVisible(false)}
              style={({ pressed }) => [
                styles.closeButton,
                pressed && styles.closeButtonPressed,
              ]}
            >
              <Text style={styles.closeButtonText}>Let's Go!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Header Row */}
      <View style={styles.titleRow}>
        <Text style={styles.headerTitle}>Course Goals</Text>
        <Pressable
          onPress={() => setWelcomeVisible(true)}
          style={({ pressed }) => [
            styles.iconButton,
            pressed && styles.iconButtonPressed,
          ]}
        >
          <MaterialIcons name="account-circle" size={36} color="#e94560" />
        </Pressable>
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
  iconButton: {
    padding: 4,
    borderRadius: 20,
  },
  iconButtonPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.9 }],
  },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#16213e',
    borderRadius: 20,
    padding: 32,
    width: '80%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0f3460',
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 16,
    marginBottom: 8,
    letterSpacing: 1,
  },
  welcomeMessage: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  closeButton: {
    backgroundColor: '#e94560',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  closeButtonPressed: {
    backgroundColor: '#c73652',
    transform: [{ scale: 0.97 }],
    opacity: 0.85,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});