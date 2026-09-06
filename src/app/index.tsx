import { FlatList, StyleSheet, Text, View } from 'react-native';

import { PostCard } from '@/components/post-card';
import { post as posts } from '@/data/posts';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard post={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 16,
  },
});