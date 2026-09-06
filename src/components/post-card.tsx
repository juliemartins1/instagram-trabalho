import { Post } from '@/model/post';
import { StyleSheet, Text, View } from 'react-native';


interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <View style={styles.post}>
            <Text style={styles.username}>{post.username}</Text>

            <View style={styles.imagePlaceholder}>
                <Text style={styles.imageText}>
                    Imagem da publicação
                </Text>
            </View>

            <Text style={styles.actions}>♡   💬   ➤</Text>

            <Text style={styles.likes}>
                {post.likes} curtidas
            </Text>

            <Text style={styles.description}>
                <Text style={styles.username}>
                    {post.username}{' '}
                </Text>

                {post.description}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        width: '100%',
    },

    username: {
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },

    imagePlaceholder: {
        width: '100%',
        height: 350,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageText: {
        fontSize: 18,
        color: '#666',
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
        padding: 16,
    },
});