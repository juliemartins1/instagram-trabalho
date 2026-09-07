import { ImageSourcePropType } from 'react-native';

export interface Profile {
    username: string;
    name: string;
    avatar: ImageSourcePropType;
    bio: string;
    website: string;
    posts: number;
    followers: number;
    following: number;
    private: boolean;
}
