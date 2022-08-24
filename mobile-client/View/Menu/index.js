import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import logo from '../../assets/user.png';
import TextCard from '../../components/Card/TextCard';
import UserCombo from '../../components/UserCombo';

export default function Menu({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <View style={styles.HeaderLeft}>
                    <UserCombo sourceImg={logo} onpress={() => { }} position="12" />
                    <View style={styles.divider}></View>
                </View>
                <View style={styles.HeaderRight}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <UserCombo sourceImg={logo} onpress={() => { }} position="1" />
                        <UserCombo sourceImg={logo} onpress={() => { }} position="2" />
                        <UserCombo sourceImg={logo} onpress={() => { }} position="3" />
                        <UserCombo sourceImg={logo} onpress={() => { }} position="4" />
                        <UserCombo sourceImg={logo} onpress={() => { }} position="5" />
                        <UserCombo sourceImg={logo} onpress={() => { }} position="6" />
                        <UserCombo sourceImg={logo} onpress={() => { }} position="7" />
                    </ScrollView>
                </View>
            </View>

            <View style={styles.Body}>
                <TextCard title="Mauro Henrique" onPress={() => { }} logo={logo}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </TextCard>
                
                <TextCard title="Mauro Henrique" onPress={() => { }} logo={logo}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </TextCard>
                
                <TextCard title="Mauro Henrique" onPress={() => { }} logo={logo}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </TextCard>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
    },
    Header: {
        width: '100%',
        height: 120,
        borderBottomColor: '#ff5757',
        borderBottomWidth: 3,
        flexDirection: 'row',
        display: 'flex',
    },
    HeaderLeft: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingTop: 20,
        flexDirection: 'row',

    },
    HeaderRight: {
        width: '75%',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingTop: 20,
    },
    divider: {
        height: '50%',
        width: 2,
        marginLeft: 10,
        backgroundColor: '#ff5757',
        marginTop: 10,

    },
    Body: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 32,
    },
    footer: {
        width: '100%',
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 32,
        backgroundColor: '#ff5757',
        position: 'absolute',
        bottom: 0,
    }
   
});