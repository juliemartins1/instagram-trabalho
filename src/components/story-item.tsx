import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface StoryItemProps {
    username: string;
    image: ImageSourcePropType;
}

export function StoryItem({ username, image }: StoryItemProps) {
    return (
        <View style={styles.container}>
            <Image
                source={image}
                style={styles.avatar}
            />

            <Text style={styles.username}>
                {username}
            </Text>
        </View>
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