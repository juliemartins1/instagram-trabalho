import { FlatList, StyleSheet, Text, View } from 'react-native';

import { PostCard } from '@/components/post-card';
import { StoryItem } from '@/components/story-item';
import { posts } from '@/data/posts';
import { stories } from '@/data/stories';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>

      <FlatList
        data={stories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StoryItem
            username={item.username}
            image={item.image}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.stories}
      />

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

  stories: {
    paddingVertical: 50,
    paddingHorizontal: 8,
  },
});