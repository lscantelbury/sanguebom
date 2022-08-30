import { ScrollView } from 'react-native-gesture-handler';
import logo from '../../assets/user.png';
import TextCard from '../../components/Card/TextCard';
import UserCombo from '../../components/UserCombo';
import { Container, Divider, Body, Header,  HeaderRight } from './style';

export default function Menu({ navigation, props }) {
    return (
        <Container>
            <Header>
                <HeaderRight>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <UserCombo sourceImg={logo} onpress={() => {
                             navigation.navigate('Perfil', { 
                                user: {
                                    name: 'Ingrid Bittencourt',
                                    email: 'ingridinha@gmail.com',
                                    bio: 'Stay humble. Be kind. Work hard.', 
                                    position: '3'
                                }
                             });
                             }} position="3" />
                        <Divider />
                        <UserCombo sourceImg={logo} onpress={() => {
                                navigation.navigate('Perfil', { 
                                    user: {
                                        name: 'José Antunes',
                                        email: 'jantuscara@gmail.com',
                                        bio: 'Lorem ipsum serve para dizer o que é o que é.',
                                        position: '1'

                                    }
                                });

                         }} position="1" />
                        <UserCombo sourceImg={logo} onpress={() => {
                                navigation.navigate('Perfil', { 
                                    user: {
                                        name: 'João Silva',
                                        email: 'jhon.si@gmail.com',
                                        bio: 'tobe or notobe.',
                                        position: '2'
                                    }
                                });
                         }} position="2" />
                         
                    </ScrollView>
                </HeaderRight>
            </Header>

            <Body>
                <TextCard title="Mauro Henrique" onPress={() => { }} logo={logo}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </TextCard>

                <TextCard title="Mauro Henrique" onPress={() => { }} logo={logo}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </TextCard>

                <TextCard title="Mauro Henrique" onPress={() => { }} logo={logo}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </TextCard>
            </Body>
        </Container>
    );
}
