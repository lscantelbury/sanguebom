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
                                    email: 'joao@gmail.com',
                                    bio: 'Stay humble. Be kind. Work hard.' 
                                }
                             });
                             }} position="12" />
                        <Divider />
                        <UserCombo sourceImg={logo} onpress={() => { }} position="1" />
                        <UserCombo sourceImg={logo} onpress={() => { }} position="2" />
                        <UserCombo sourceImg={logo} onpress={() => { }} position="3" />
                        <UserCombo sourceImg={logo} onpress={() => { }} position="4" />
                        <UserCombo sourceImg={logo} onpress={() => { }} position="5" />
                        <UserCombo sourceImg={logo} onpress={() => { }} position="6" />
                        <UserCombo sourceImg={logo} onpress={() => { }} position="7" />
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
