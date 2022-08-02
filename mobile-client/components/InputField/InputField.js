import { TextInput, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

export default function InputField({
    placeholder,
    secureTextEntry,
    onChangeText,
    value,
    style,
    ...props
    }) {
    return (
        <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor="#fff"
        
        {...props}
        />
    );
    }
    const styles = StyleSheet.create({
        input: {
            width: '100%',
            borderColor: "white",
            borderWidth: 1,
            color: '#fff',
            height: 50,
            paddingLeft: 10,
            borderRadius: 3,
        }

    });