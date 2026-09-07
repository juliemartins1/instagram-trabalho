import { ImageSourcePropType } from 'react-native';

export interface Story {
    id: string;
    userId: string;
    username: string;
    image: ImageSourcePropType;
}

export const stories: Story[] = [
    {
        id: 's1',
        userId: 'u7',
        username: 'Jin',
        image: require('../../assets/images/JinPerfil.png'),
    },
    {
        id: 's2',
        userId: 'u8',
        username: 'Suga',
        image: require('../../assets/images/sugaPerfil.png'),
    },
    {
        id: 's3',
        userId: 'u9',
        username: 'Jhope',
        image: require('../../assets/images/jhopePerfil.png'),
    },
    {
        id: 's4',
        userId: 'u10',
        username: 'Rm',
        image: require('../../assets/images/rmPerfil.png'),
    },
    {
        id: 's5',
        userId: 'u11',
        username: 'Jimin',
        image: require('../../assets/images/jiminPerfil.png'),
    },
];
