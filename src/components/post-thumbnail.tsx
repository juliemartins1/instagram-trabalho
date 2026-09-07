import { Post } from '@/model/post';
import { Image, StyleSheet } from 'react-native';

interface PostThumbnailProps {
    post: Post;
}

export function PostThumbnail({ post }: PostThumbnailProps) {
    return <Image source={post.image} style={styles.thumbnail} />;
}

const styles = StyleSheet.create({
    thumbnail: {
        width: '33%',
        aspectRatio: 1,
        margin: '0.16%',
    },
});
