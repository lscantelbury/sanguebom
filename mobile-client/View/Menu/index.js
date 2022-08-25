import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import logo from '../../assets/user.png';
import TextCard from '../../components/Card/TextCard';
import UserCombo from '../../components/UserCombo';
import { Container, Divider, Body, Header, HeaderLeft, HeaderRight } from './style';

export default function Menu({ navigation }) {
    return (
        <Container>
            <Header>
                <HeaderLeft>
                    <UserCombo sourceImg={logo} onpress={() => { }} position="12" />
                    <Divider />
                </HeaderLeft>
                <HeaderRight>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
