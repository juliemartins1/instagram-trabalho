import { User } from '@/model/user';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface ProfileHeaderProps {
    user: User;
}

function formatCount(value: number): string {
    if (value >= 1000) {
        return `${(value / 1000).toFixed(1).replace('.0', '')}mil`;
    }
    return String(value);
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <Image source={user.avatar} style={styles.avatar} />

                <View style={styles.stats}>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>{user.postsCount}</Text>
                        <Text style={styles.statLabel}>publicações</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>{formatCount(user.followers)}</Text>
                        <Text style={styles.statLabel}>seguidores</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>{formatCount(user.following)}</Text>
                        <Text style={styles.statLabel}>seguindo</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.fullName}>{user.fullName}</Text>
            <Text style={styles.bio}>{user.bio}</Text>

            <View style={styles.buttonsRow}>
                <View style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>Editar perfil</Text>
                </View>
                <View style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>Compartilhar perfil</Text>
                </View>
            </View>

            <View style={styles.gridTabs}>
                <View style={[styles.gridTab, styles.gridTabActive]}>
                    <Text style={styles.gridTabIcon}>▦</Text>
                </View>
                <View style={styles.gridTab}>
                    <Text style={styles.gridTabIcon}>▷</Text>
                </View>
                <View style={styles.gridTab}>
                    <Text style={styles.gridTabIcon}>◎</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        backgroundColor: '#fff',
    },

    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 12,
    },

    avatar: {
        width: 86,
        height: 86,
        borderRadius: 43,
        borderWidth: 2,
        borderColor: '#e1306c',
        marginRight: 20,
    },

    stats: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    statItem: {
        alignItems: 'center',
    },

    statNumber: {
        fontSize: 17,
        fontWeight: 'bold',
    },

    statLabel: {
        fontSize: 12,
        color: '#60646C',
        marginTop: 2,
    },

    fullName: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 2,
        paddingHorizontal: 16,
    },

    bio: {
        fontSize: 13,
        color: '#0c0c0c',
        marginBottom: 14,
        paddingHorizontal: 16,
    },

    buttonsRow: {
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
    },

    actionButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#dbdbdb',
        borderRadius: 8,
        paddingVertical: 8,
        alignItems: 'center',
    },

    actionButtonText: {
        fontWeight: '600',
        fontSize: 13,
    },

    gridTabs: {
        flexDirection: 'row',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#dbdbdb',
    },

    gridTab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },

    gridTabActive: {
        borderBottomColor: '#0c0c0c',
    },

    gridTabIcon: {
        fontSize: 20,
        color: '#60646C',
    },
});