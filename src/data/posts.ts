import { Post } from '@/model/post';

export const posts: Post[] = [
    {
        id: '1',
        userId: 'u1',
        image: require('../../assets/images/MinhaFoto.png'),
        description: 'Minha Primeira Publicação!',
        location: 'São Paulo, Brasil',
        likes: 120,
        commentsEnabled: true,
    },
    {
        id: '2',
        userId: 'u2',
        image: require('../../assets/images/thaehyung.png'),
        description: 'Minha Segunda Publicação!',
        likes: 80,
        commentsEnabled: true,
    },
    {
        id: '3',
        userId: 'u3',
        image: require('../../assets/images/jungkookPerfil.png'),
        description: 'Minha Terceira Publicação!',
        likes: 200,
        commentsEnabled: true,
    },
    {
        id: '4',
        userId: 'u4',
        image: require('../../assets/images/taeyang.png'),
        description: 'Minha Quarta Publicação!',
        likes: 50,
        commentsEnabled: false,
    },
    {
        id: '5',
        userId: 'u5',
        image: require('../../assets/images/gdragon.png'),
        description: 'Minha Quinta Publicação!',
        likes: 300,
        commentsEnabled: true,
    },
    {
        id: '6',
        userId: 'u6',
        image: require('../../assets/images/daesung.png'),
        description: 'Minha Sexta Publicação!',
        likes: 150,
        commentsEnabled: true,
    },
];
