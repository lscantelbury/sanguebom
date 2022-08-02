import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Gradient from './components/Grandient/Gradient';
import logo from "./assets/LogoSangueBom.png";
import Login from './View/Login/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linearGradient(to left, #f90, #ff1);',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '40%',
    resizeMode: 'contain',
  }
});
