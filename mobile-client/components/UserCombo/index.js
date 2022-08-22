import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Gradient from "../Grandient/Gradient";

export default function UserCombo({ onpress, sourceImg, position }) {
    return (
        <TouchableOpacity style={styles.btn} onPress={
            () => {
                onpress()
            }
        }>
            <View style={styles.userCombo}>
                <Image source={
                    sourceImg
                } style={styles.profilePic} />
                <View style={styles.rankingInfo}>
                    <Gradient styleCustom={{ borderRadius: 6 }}>
                        <Text style={styles.rankingPos}>{position}º</Text>
                    </Gradient>

                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    profilePic: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: '#ff5757',

    },
    userCombo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    rankingInfo: {
        width: 40,
        height: 25,
        borderRadius: 15,
        marginLeft: -25,
        marginTop: 45,
    },
    rankingPos: {
        fontSize: 12,
        color: '#fff',
    },
    btn: {
        padding: 0,
        width: 75,
    }

}
);