import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Gradient from '../../components/Grandient/Gradient';
import InputField from '../../components/InputField/InputField';
import logo from '../../assets/LogoSangueBom.png';
import ButtonPrimary from '../../components/Button/ButtonPrimary';

export default function Login({ navigation }) {
    return (
        <Gradient>
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.title}>Entrar</Text>
                <View style={styles.formGroup}>
                    <InputField placeholder={'E-mail'} required={true} style={styles.input} />
                    <InputField placeholder={'Senha'} required={true} style={styles.input} />
                    {/* esqueceu a senha */}
                    <TouchableOpacity style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                    <ButtonPrimary onPress={() => {
                    }}>entrar</ButtonPrimary>
                    <TouchableOpacity onPress={
                        () => {
                            navigation.navigate('SignUp')
                        }
                    }>
                        <Text style={styles.forgotPasswordText}>Ainda não possui uma conta? </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Gradient>

    );
}

const styles = StyleSheet.create({
    formGroup: {
        marginTop: 20,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginBottom: 15,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    middle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '40%',
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        color: '#fff',
    },
    forgotPasswordText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
    forgotPassword: {
        marginBottom: 10,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    }

});