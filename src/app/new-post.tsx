import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    View,
} from 'react-native';

import { FormField } from '@/components/form-field';
import { ImagePickerRow } from '@/components/image-picker-row';
import { usePosts } from '@/context/posts-context';
import { mockGalleryImages } from '@/data/mock-images';
import { users } from '@/data/users';

export default function NewPostScreen() {
    const { userId } = useLocalSearchParams<{ userId?: string }>();
    const { addPost } = usePosts();
    const author = users.find((user) => user.id === userId) ?? users[0];

    const [selectedImageId, setSelectedImageId] = useState(mockGalleryImages[0].id);
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [hideLikeCount, setHideLikeCount] = useState(false);
    const [commentsEnabled, setCommentsEnabled] = useState(true);
    const [descriptionError, setDescriptionError] = useState('');
    const [published, setPublished] = useState(false);

    function handlePublish() {
        if (description.trim().length === 0) {
            setDescriptionError('Escreva uma legenda para publicar.');
            return;
        }

        setDescriptionError('');
        setPublished(true);

        const selectedImage = mockGalleryImages.find((image) => image.id === selectedImageId);

        // Sem envio a servidor: a publicação é adicionada ao estado do app
        // e passa a aparecer no feed e no perfil imediatamente.
        setTimeout(() => {
            addPost({
                userId: author.id,
                image: selectedImage?.source ?? author.avatar,
                description: description.trim(),
                location: location.trim() || undefined,
                likes: 0,
                commentsEnabled,
            });

            Alert.alert('Publicado!', 'Sua publicação foi criada com sucesso.', [
                { text: 'OK', onPress: () => router.back() },
            ]);
        }, 400);
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Pressable onPress={() => router.back()} hitSlop={12}>
                    <Text style={styles.cancel}>Cancelar</Text>
                </Pressable>
                <Text style={styles.title}>Nova publicação</Text>
                <View style={{ width: 60 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.author}>Publicando como @{author.username}</Text>

                <Text style={styles.sectionLabel}>Escolha uma foto</Text>
                <ImagePickerRow
                    images={mockGalleryImages}
                    selectedId={selectedImageId}
                    onSelect={setSelectedImageId}
                />

                <FormField
                    label="Legenda"
                    placeholder="Escreva uma legenda..."
                    value={description}
                    onChangeText={(text) => {
                        setDescription(text);
                        if (descriptionError) setDescriptionError('');
                    }}
                    error={descriptionError}
                    multiline
                    numberOfLines={3}
                />

                <FormField
                    label="Localização"
                    placeholder="Adicionar localização (opcional)"
                    value={location}
                    onChangeText={setLocation}
                />

                <View style={styles.switchRow}>
                    <Text style={styles.switchLabel}>Ocultar contagem de curtidas</Text>
                    <Switch value={hideLikeCount} onValueChange={setHideLikeCount} />
                </View>

                <View style={styles.switchRow}>
                    <Text style={styles.switchLabel}>Permitir comentários</Text>
                    <Switch value={commentsEnabled} onValueChange={setCommentsEnabled} />
                </View>

                <Pressable
                    style={[styles.publishButton, published && styles.publishButtonDisabled]}
                    onPress={handlePublish}
                    disabled={published}
                >
                    <Text style={styles.publishButtonText}>
                        {published ? 'Publicando...' : 'Compartilhar'}
                    </Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 54,
        paddingBottom: 14,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#dbdbdb',
    },

    cancel: {
        fontSize: 14,
        width: 60,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    content: {
        padding: 16,
    },

    author: {
        fontSize: 13,
        color: '#60646C',
        marginBottom: 16,
    },

    sectionLabel: {
        fontSize: 13,
        fontWeight: '600',
        marginBottom: 8,
    },

    switchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#e5e5e5',
    },

    switchLabel: {
        fontSize: 14,
    },

    publishButton: {
        backgroundColor: '#e1306c',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 24,
    },

    publishButtonDisabled: {
        opacity: 0.6,
    },

    publishButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
});
