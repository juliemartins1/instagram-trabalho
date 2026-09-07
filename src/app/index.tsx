import { router } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { BottomTabBar } from '@/components/bottom-tab-bar';
import { PostCard } from '@/components/post-card';
import { StoryItem } from '@/components/story-item';
import { usePosts } from '@/context/posts-context';
import { stories } from '@/data/stories';
import { users } from '@/data/users';

// Usuário considerado "logado" nesta demonstração (sem autenticação real).
const CURRENT_USER_ID = 'u1';

export default function HomeScreen() {
    const { posts } = usePosts();

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.logo}>Instagram</Text>
                <View style={styles.topBarIcons}>
                    <Text style={styles.topBarIcon}>♡</Text>
                    <Text style={styles.topBarIcon}>✉️</Text>
                </View>
            </View>

            <FlatList
                data={stories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <StoryItem
                        username={item.username}
                        image={item.image}
                        onPress={() => router.push({ pathname: '/profile/[id]', params: { id: item.userId } })}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.stories}
            />

            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    const author = users.find((user) => user.id === item.userId);
                    if (!author) return null;

                    return (
                        <PostCard
                            post={item}
                            user={author}
                            onPressUser={() => router.push({ pathname: '/profile/[id]', params: { id: author.id } })}
                        />
                    );
                }}
                showsVerticalScrollIndicator={false}
            />

            <BottomTabBar currentUserId={CURRENT_USER_ID} active="home" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 44,
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },

    logo: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingVertical: 12,
    },

    topBarIcons: {
        flexDirection: 'row',
        gap: 16,
    },

    topBarIcon: {
        fontSize: 22,
    },

    stories: {
        paddingVertical: 12,
        paddingHorizontal: 8,
    },
});
