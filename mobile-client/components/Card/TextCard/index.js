import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function TextCard({ children, title, logo }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardLeft}>
                <Image source={logo} style={styles.cardImg} />
            </View>
            <View style={styles.cardRight}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardText}>
                    {children}
                </Text>

                <View style={styles.cardButtons}>
                    <TouchableOpacity style={styles.cardButton}>
                        {/* Svg Like */}
                        <Text style={styles.cardButtonText}>Seguir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardButton}>
                        {/* Svg Message */}
                        <Text style={styles.cardButtonText}>Mensagem</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardButton}>
                        {/* Svg Share */}
                        <Text style={styles.cardButtonText}>Compartilhar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        width: '85%',
        flexDirection: 'row',
        display: 'flex',
        shadowColor: '#0f0f0f',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 1.5,
        padding: 5,
        borderRadius: 8,
        border: '1px solid #ff5757',
        marginBottom: 20,

    },
    cardImg: {
        width: 54,
        height: 54,
        margin: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardLeft: {
        width: 90,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    cardButtons: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
        alignSelf: 'flex-end',
        width: '100%',
        position: 'absolute',
        bottom: 0,

    },
    cardRight: {
        width: '70%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ff5757',
        marginBottom: 5,
        paddingTop: 10,
    },
    cardText: {
        fontSize: 12,
        color: '#0f0f0f',
        marginBottom: 35,
        paddingTop: 10,

    }
});