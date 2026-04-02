import { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function GoalItem({ text, index, onDelete }) {
  const [confirmVisible, setConfirmVisible] = useState(false);

  return (
    <View style={styles.goalItem}>

      {/* Confirmation Modal */}
      <Modal
        visible={confirmVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setConfirmVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <MaterialIcons name="delete-forever" size={52} color="#e94560" />
            <Text style={styles.confirmTitle}>Delete Goal?</Text>
            <Text style={styles.confirmMessage}>
              Are you sure you want to delete:
            </Text>
            <Text style={styles.confirmGoalText}>"{text}"</Text>
            <Text style={styles.confirmSubMessage}>
              This action cannot be undone.
            </Text>
            <View style={styles.buttonRow}>
              <Pressable
                onPress={() => setConfirmVisible(false)}
                style={({ pressed }) => [
                  styles.cancelButton,
                  pressed && styles.cancelButtonPressed,
                ]}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setConfirmVisible(false);
                  onDelete();
                }}
                style={({ pressed }) => [
                  styles.deleteButton,
                  pressed && styles.deleteButtonPressed,
                ]}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Goal Row */}
      <View style={styles.goalIndex}>
        <Text style={styles.goalIndexText}>{index + 1}</Text>
      </View>
      <Text style={styles.goalText}>{text}</Text>
      <Pressable
        onPress={() => setConfirmVisible(true)}
        style={({ pressed }) => [
          styles.deleteIconButton,
          pressed && styles.deleteIconButtonPressed,
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
  deleteIconButton: {
    padding: 6,
    borderRadius: 8,
  },
  deleteIconButtonPressed: {
    backgroundColor: '#1a1a2e',
    transform: [{ scale: 0.9 }],
    opacity: 0.7,
  },

  // Confirmation Modal
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
    borderColor: '#e94560',
  },
  confirmTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 12,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  confirmMessage: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  confirmGoalText: {
    fontSize: 14,
    color: '#e94560',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 6,
    paddingHorizontal: 8,
  },
  confirmSubMessage: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#0f3460',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  cancelButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },
  cancelButtonText: {
    color: '#888',
    fontSize: 15,
    fontWeight: 'bold',
  },
  deleteButton: {
    flex: 1,
    backgroundColor: '#e94560',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  deleteButtonPressed: {
    backgroundColor: '#c73652',
    transform: [{ scale: 0.97 }],
    opacity: 0.85,
  },
  deleteButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});