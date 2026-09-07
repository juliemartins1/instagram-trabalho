import { router, useLocalSearchParams } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { BottomTabBar } from '@/components/bottom-tab-bar';
import { PostThumbnail } from '@/components/post-thumbnail';
import { ProfileHeader } from '@/components/profile-header';
import { usePosts } from '@/context/posts-context';
import { users } from '@/data/users';

// Usuário considerado "logado" nesta demonstração (sem autenticação real).
const CURRENT_USER_ID = 'u1';

export default function ProfileScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { posts } = usePosts();

    const user = users.find((item) => item.id === id);
    const userPosts = posts.filter((post) => post.userId === id);

    if (!user) {
        return (
            <View style={styles.center}>
                <Text>Usuário não encontrado.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Pressable onPress={() => router.back()} hitSlop={12}>
                    <Text style={styles.backArrow}>‹</Text>
                </Pressable>

                <View style={styles.usernameRow}>
                    <Text style={styles.headerUsername} numberOfLines={1}>
                        {user.username}
                    </Text>
                    <Text style={styles.chevron}>▾</Text>
                </View>

                <View style={styles.topBarIcons}>
                    <Pressable
                        hitSlop={10}
                        onPress={() =>
                            router.push({ pathname: '/new-post', params: { userId: user.id } })
                        }
                    >
                        <Text style={styles.topBarIcon}>➕</Text>
                    </Pressable>
                    <Text style={styles.topBarIcon}>✉️</Text>
                    <Text style={styles.topBarIcon}>☰</Text>
                </View>
            </View>

            <FlatList
                data={userPosts}
                keyExtractor={(item) => item.id}
                numColumns={3}
                ListHeaderComponent={
                    <ProfileHeader user={{ ...user, postsCount: userPosts.length }} />
                }
                renderItem={({ item }) => <PostThumbnail post={item} />}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>Nenhuma publicação ainda.</Text>
                }
            />

            <BottomTabBar
                currentUserId={CURRENT_USER_ID}
                active={id === CURRENT_USER_ID ? 'profile' : 'home'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 54,
        paddingBottom: 10,
        gap: 8,
    },

    backArrow: {
        fontSize: 30,
        width: 24,
    },

    usernameRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },

    headerUsername: {
        fontSize: 16,
        fontWeight: 'bold',
        maxWidth: 160,
    },

    chevron: {
        fontSize: 12,
    },

    topBarIcons: {
        flexDirection: 'row',
        gap: 12,
        width: 90,
        justifyContent: 'flex-end',
    },

    topBarIcon: {
        fontSize: 18,
    },

    emptyText: {
        textAlign: 'center',
        color: '#60646C',
        paddingVertical: 24,
    },
});
