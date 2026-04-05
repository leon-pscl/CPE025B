import { View, Text, StyleSheet, FlatList, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');
const IMAGE_SIZE = width / 3;

const placeholderImages = [
  { id: '1', uri: 'https://picsum.photos/200/200?random=1' },
  { id: '2', uri: 'https://picsum.photos/200/200?random=2' },
  { id: '3', uri: 'https://picsum.photos/200/200?random=3' },
  { id: '4', uri: 'https://picsum.photos/200/200?random=4' },
  { id: '5', uri: 'https://picsum.photos/200/200?random=5' },
  { id: '6', uri: 'https://picsum.photos/200/200?random=6' },
  { id: '7', uri: 'https://picsum.photos/200/200?random=7' },
  { id: '8', uri: 'https://picsum.photos/200/200?random=8' },
  { id: '9', uri: 'https://picsum.photos/200/200?random=9' },
];

export default function ImageGrid() {
  return (
    <View style={styles.container}>
      <FlatList
        data={placeholderImages}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.uri }}
            style={styles.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    padding: 1,
  },
});