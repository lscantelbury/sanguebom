import { TouchableOpacity } from 'react-native';
import logo from '../../assets/LogoSangueBom.png';
import Button from '../../components/Button';
import Gradient from '../../components/Grandient/Gradient';
import InputField from '../../components/InputField/index';
import { Container, ForgotPassword, ForgotPasswordText, FormGroup, Logo, SignUp, Title } from './style';
import { useState } from 'react';
import api from '../../services/api';


export default function Login({ navigation }) {

    const [user, setUser] = useState({
        user_email: '',
        user_password: '',
    });

    async function handleLogin() {
        await api.post("/user/login", user).then(
            response => {
                navigation.navigate("Menu");
            }
        ).catch(error => {
            console.log("erro ao fazer login!", error);
        });
        
    }
    return (
        <Gradient>
            <Container>
                <Logo source={logo} resizeMode={'contain'} />
                <Title>Entrar</Title>
                <FormGroup>
                    <InputField
                        placeholder={'E-mail'}
                        required={true}
                        style={'margin-bottom: 15px;'}
                        onChangeText={(text) => {

                            setUser({
                                ...user,
                                user_email: text,
                            })
                        }}
                    />
                    <InputField
                        placeholder={'Senha'}
                        required={true}
                        style={'margin-bottom: 15px;'}
                        secureTextEntry={true}
                        onChangeText={
                            (text) => {
                                setUser({
                                    ...user,
                                    user_password: text,
                                })
                            }}
                    />
                    {/* esqueceu a senha */}
                    <ForgotPassword>
                        <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
                    </ForgotPassword>
                    <Button onPress={() => {

                        handleLogin();
                    }}>Entrar</Button>
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