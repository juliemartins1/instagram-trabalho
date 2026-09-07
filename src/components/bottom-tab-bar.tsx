import { router } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { users } from '@/data/users';

interface BottomTabBarProps {
    /** id do usuário considerado "logado" nesta demonstração */
    currentUserId: string;
    active: 'home' | 'profile';
}

export function BottomTabBar({ currentUserId, active }: BottomTabBarProps) {
    const currentUser = users.find((user) => user.id === currentUserId);

    return (
        <View style={styles.container}>
            <Pressable style={styles.tab} onPress={() => router.push('/')}>
                <Text style={[styles.icon, active === 'home' && styles.iconActive]}>⌂</Text>
            </Pressable>

            <Pressable style={styles.tab} onPress={() => router.push('/')}>
                <Text style={styles.icon}>🔍</Text>
            </Pressable>

            <Pressable
                style={styles.tab}
                onPress={() =>
                    router.push({ pathname: '/new-post', params: { userId: currentUserId } })
                }
            >
                <Text style={styles.icon}>➕</Text>
            </Pressable>

            <Pressable style={styles.tab} onPress={() => router.push('/')}>
                <Text style={styles.icon}>♡</Text>
            </Pressable>

            <Pressable
                style={styles.tab}
                onPress={() =>
                    router.push({ pathname: '/profile/[id]', params: { id: currentUserId } })
                }
            >
                {currentUser ? (
                    <Image
                        source={currentUser.avatar}
                        style={[
                            styles.profileAvatar,
                            active === 'profile' && styles.profileAvatarActive,
                        ]}
                    />
                ) : null}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#dbdbdb',
        backgroundColor: '#fff',
    },

    tab: {
        flex: 1,
        alignItems: 'center',
    },

    icon: {
        fontSize: 24,
        color: '#0c0c0c',
    },

    iconActive: {
        color: '#000',
        fontWeight: 'bold',
    },

    profileAvatar: {
        width: 26,
        height: 26,
        borderRadius: 13,
    },

    profileAvatarActive: {
        borderWidth: 2,
        borderColor: '#0c0c0c',
    },
});
