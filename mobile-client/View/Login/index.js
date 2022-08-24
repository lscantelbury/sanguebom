import { TouchableOpacity } from 'react-native';
import logo from '../../assets/LogoSangueBom.png';
import Button from '../../components/Button';
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
                    <Button onPress={() => {
                        
                        navigation.navigate('Menu')
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