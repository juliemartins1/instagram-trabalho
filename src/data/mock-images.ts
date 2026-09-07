import { ImageSourcePropType } from 'react-native';

export interface MockImage {
    id: string;
    source: ImageSourcePropType;
}

/**
 * Galeria mockada usada na tela "Nova publicação" para simular a
 * escolha de uma foto do rolo de câmera, sem depender de acesso
 * real à galeria do dispositivo.
 */
export const mockGalleryImages: MockImage[] = [
    { id: 'g1', source: require('../../assets/images/MinhaFoto.png') },
    { id: 'g2', source: require('../../assets/images/thaehyung.png') },
    { id: 'g3', source: require('../../assets/images/jungkookPerfil.png') },
    { id: 'g4', source: require('../../assets/images/taeyang.png') },
    { id: 'g5', source: require('../../assets/images/gdragon.png') },
    { id: 'g6', source: require('../../assets/images/daesung.png') },
    { id: 'g7', source: require('../../assets/images/JinPerfil.png') },
    { id: 'g8', source: require('../../assets/images/sugaPerfil.png') },
];
