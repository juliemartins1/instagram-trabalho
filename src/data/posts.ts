import { Post } from '@/model/post';

export const posts: Post[] = [
{
    id: '1',
    username: 'julie',
    avatar: require('../../assets/images/MinhaFoto.png'),
    image: require('../../assets/images/MinhaFoto.png'),
    description: 'Minha Primeira Publicação!',
    likes: 120,
},
{
    id: '2',
    username: 'Thaehyung',
    avatar: require('../../assets/images/thaehyung.png'),
    image: require('../../assets/images/thaehyung.png'),
    description: 'Minha Segunda Publicação!',
    likes: 80,
},
{
    id:'3',
    username: 'Jungkook',
    avatar: require('../../assets/images/jungkookPerfil.png'),
    image: require('../../assets/images/jungkookPerfil.png'),
    description: 'Minha Terceira Publicação!',
    likes: 200,
},
{
    id:'4',
    username: 'Taeyang',
    avatar: require('../../assets/images/taeyang.png'), 
    image: require('../../assets/images/taeyang.png'),
    description: 'Minha Quarta Publicação!',
    likes: 50,
},
{
    id:'5',
    username: 'Gdragon',
    avatar: require('../../assets/images/gdragon.png'),
    image: require('../../assets/images/gdragon.png'),
    description: 'Minha Quinta Publicação!',
    likes: 300,
},
{
    id:'6',
    username: 'Daesung',
    avatar: require('../../assets/images/daesung.png'),
    image: require('../../assets/images/daesung.png'),
    description: 'Minha Sexta Publicação!',
    likes: 150,
}
];
