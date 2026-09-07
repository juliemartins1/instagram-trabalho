import {
    Image,
    ImageSourcePropType,
    Pressable,
    StyleSheet,
    Text,
} from 'react-native';

interface StoryItemProps {
    username: string;
    image: ImageSourcePropType;
    onPress?: () => void;
}

export function StoryItem({ username, image, onPress }: StoryItemProps) {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image
                source={image}
                style={styles.avatar}
            />

            <Text style={styles.username}>
                {username}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 80,
        marginHorizontal: 4,
    },

    avatar: {
        width: 80,
        height: 80,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: '#e1306c',
    },

    username: {
        fontSize: 12,
        color: '#0c0c0c',
        marginTop: 6,
        textAlign: 'center',
    },
});
