import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function ButtonPrimary({ children, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        boxShadow: "0px 0px 5px #000",
        marginTop: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fe5c8d",
        fontSize: 18,
        textAlign: "center",
    },
});

