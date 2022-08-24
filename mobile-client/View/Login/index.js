import { StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../../assets/LogoSangueBom.png';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import Gradient from '../../components/Grandient/Gradient';
import InputField from '../../components/InputField/index';
import { Container, ForgotPassword, ForgotPasswordText, FormGroup, Logo, SignUp, Title } from './style';

export default function Login({ navigation }) {
    return (
        <Gradient>
            <Container>
                <Logo source={logo} resizeMode={'contain'}/>
                <Title>Entrar</Title>
                <FormGroup>
                    <InputField placeholder={'E-mail'} required={true} style={'margin-bottom: 15px;'}/>
                    <InputField placeholder={'Senha'} required={true} style={'margin-bottom: 15px;'}/>
                    {/* esqueceu a senha */}
                    <ForgotPassword>
                        <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
                    </ForgotPassword>
                    <ButtonPrimary onPress={() => {
                        
                        navigation.navigate('Menu')
                    }}>Entrar</ButtonPrimary>
                    <TouchableOpacity onPress={
                        () => {
                            navigation.navigate('SignUp')
                        }
                    }>
                        <SignUp>Ainda não possui uma conta? </SignUp>
                    </TouchableOpacity>

                </FormGroup>
            </Container>
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