import { MockImage } from '@/data/mock-images';
import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    View,
} from 'react-native';

interface ImagePickerRowProps {
    images: MockImage[];
    selectedId: string;
    onSelect: (id: string) => void;
}

export function ImagePickerRow({ images, selectedId, onSelect }: ImagePickerRowProps) {
    return (
        <FlatList
            data={images}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
                <Pressable onPress={() => onSelect(item.id)}>
                    <View
                        style={[
                            styles.thumbnailWrapper,
                            item.id === selectedId && styles.thumbnailSelected,
                        ]}
                    >
                        <Image source={item.source} style={styles.thumbnail} />
                    </View>
                </Pressable>
            )}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        paddingVertical: 4,
        gap: 8,
    },

    thumbnailWrapper: {
        borderWidth: 2,
        borderColor: 'transparent',
        borderRadius: 8,
        marginRight: 4,
    },

    thumbnailSelected: {
        borderColor: '#e1306c',
    },

    thumbnail: {
        width: 72,
        height: 72,
        borderRadius: 6,
    },
});
