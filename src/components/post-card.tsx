import { Post } from '@/model/post';
import { User } from '@/model/user';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface PostCardProps {
    post: Post;
    user: User;
    onPressUser?: () => void;
}

export function PostCard({ post, user, onPressUser }: PostCardProps) {
    return (
        <View style={styles.post}>

            {/* Cabeçalho */}
            <Pressable style={styles.header} onPress={onPressUser}>
                <Image
                    source={user.avatar}
                    style={styles.avatar}
                />

                <Text style={styles.username}>
                    {user.username}
                </Text>
            </Pressable>

            {/* Imagem da publicação */}
            <Image
                source={post.image}
                style={styles.postImage}
            />

            {/* Ações */}
            <Text style={styles.actions}>
                ♡   💬   ➤
            </Text>

            {/* Curtidas */}
            <Text style={styles.likes}>
                {post.likes} curtidas
            </Text>

            {/* Descrição */}
            <Text style={styles.description}>
                <Text style={styles.username}>
                    {user.username}{' '}
                </Text>
                {post.description}
            </Text>

            {post.location ? (
                <Text style={styles.location}>{post.location}</Text>
            ) : null}

        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        width: '100%',
        marginBottom: 20,
        backgroundColor: '#fff',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },

    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },

    username: {
        fontWeight: 'bold',
        fontSize: 15,
    },

    postImage: {
        width: '100%',
        height: 350,
        resizeMode: 'cover',
    },

    actions: {
        fontSize: 28,
        paddingHorizontal: 16,
        paddingTop: 10,
    },

    likes: {
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingTop: 8,
    },

    description: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 12,
    },

    location: {
        paddingHorizontal: 16,
        paddingTop: 2,
        paddingBottom: 12,
        fontSize: 12,
        color: '#60646C',
    },
});
