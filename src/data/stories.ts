import { ImageSourcePropType } from 'react-native';

export interface Story {
    id: string;
    username: string;
    image: ImageSourcePropType;
}

export const stories = [
    {
        id: '1',
        username: 'Jin',
        image: require('../../assets/images/JinPerfil.png'),
    },
    {
        id: '2',
        username: 'Suga',
        image: require('../../assets/images/sugaPerfil.png'),
    },
    {
        id: '3',
        username: 'Jhope',
        image: require('../../assets/images/jhopePerfil.png'),
    },
    {
        id: '4',
        username: 'Rm',
        image: require('../../assets/images/rmPerfil.png'),
    },
    {
        id: '5',
        username: 'Jimin',
        image: require('../../assets/images/jiminPerfil.png'),
    },
];