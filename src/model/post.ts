import { ImageSourcePropType } from 'react-native';

export interface Post {
    id: string;
    userId: string;
    image: ImageSourcePropType;
    description: string;
    location?: string;
    likes: number;
    commentsEnabled: boolean;
}
