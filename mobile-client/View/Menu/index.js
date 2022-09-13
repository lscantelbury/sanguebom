import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import logo from '../../assets/user.png';
import TextCard from '../../components/Card/TextCard';
import { TextArea } from '../../components/InputArea/style';
import UserCombo from '../../components/UserCombo';
import Button from '../../components/Button';
import { Container, Divider, Body, Header, HeaderRight } from './style';
import { useState } from 'react';



export default function Menu({ navigation, route }) {


    const [message, setMessage] = useState(
        {
            post_type: 1,
            post_text: '',
            post_user: '',
            post_points_to_share: 0,
        }
    );

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
                {/* TextArea Send Message */}
                <View style={
                    {
                        width: '80%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: 80,
                        marginBottom: 30,

                    }
                }>

                    <TextArea
                        placeholder="Send Message"
                        placeholderTextColor="#FE5D97"
                        multiline={true}
                        onChangeText={(text) => {
                            setMessage({
                                ...message,
                                post_text: text,
                            });
                            
                            
                        }}

                    />
                    <Button onPress={() => {

                        console.log(message);
                    }} variant="send">></Button>

                </View>
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
