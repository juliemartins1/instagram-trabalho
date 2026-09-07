import { ImageSourcePropType } from 'react-native';

export interface User {
    id: string;
    username: string;
    fullName: string;
    avatar: ImageSourcePropType;
    bio: string;
    postsCount: number;
    followers: number;
    following: number;
}
