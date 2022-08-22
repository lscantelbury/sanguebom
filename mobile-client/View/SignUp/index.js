import { Text, Image, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Gradient from '../../components/Grandient/Gradient';
import InputField from '../../components/InputField/InputField';
import userFoto from '../../assets/user.png';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import icon from '../../assets/icone-edit.png';

export default function SignUp({ navigation }) {
    return (
        <ScrollView>
            <Gradient>
                <View style={styles.container}>
                    <Text style={styles.title}>Cadastrar</Text>
                    <View style={styles.imgSelector}>
                        <Image source={userFoto} style={styles.logo} />
                        <TouchableOpacity onPress={() => {
                        }
                        } style={styles.elementInsideFoto}>
                            <Image source={icon} style={styles.icon} />

                        </TouchableOpacity>
                    </View>
                    <View style={styles.formGroup}>
                        {/* Form Group Title */}
                        <Text style={styles.formGroupTitle}>Dados Pessoais</Text>
                        <View style={styles.flexRow}>
                            <InputField placeholder={'Nome'} required={true} style={styles.input2} />
                            <InputField placeholder={'Sobrenome'} required={true} style={styles.input2} />
                        </View>
                        <InputField placeholder={'E-mail'} required={true} style={styles.input} />
                        <InputField placeholder={'Senha'} required={true} style={styles.input} />
                        <InputField placeholder={'Confirmar Senha'} required={true} style={styles.input} />
                        <View style={styles.flexRow}>
                            <InputField placeholder={'Tipo Sanguíneo'} required={true} style={styles.input2} />
                            <InputField placeholder={'Data de Nascimento'} required={true} style={styles.input2} />
                        </View>

                        {/* Form Group Title */}
                        <Text style={styles.formGroupTitle}>Endereço</Text>
                        <View style={styles.flexRow}>
                            <InputField placeholder={'Endereço'} required={true} style={styles.input2} />
                            <InputField placeholder={'Nº'} required={true} style={styles.input3} />
                            <InputField placeholder={'Bairro'} required={true} style={styles.input4} />
                        </View>
                        <View style={styles.flexRow}>
                            <InputField placeholder={'CEP'} required={true} style={styles.input4} />
                            <InputField placeholder={'Cidade'} required={true} style={styles.input2} />
                            <InputField placeholder={'UF'} required={true} style={styles.input3} />
                        </View>




                        <ButtonPrimary onPress={() => { 
                            navigation.navigate('Login')
                        }}>cadastrar</ButtonPrimary>
                        <TouchableOpacity onPress={
                            () => {
                                // Volta para a tela de login
                                navigation.navigate('Login')
                            }
                        }>
                            <Text style={styles.forgotPasswordText}>Já possui uma conta? Faça login</Text>
                        </TouchableOpacity>

                    </View>
                </View>


            </Gradient>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    elementInsideFoto: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginRight: -10,
        marginTop: -20,
    },
    formGroup: {
        width: '88%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginBottom: 5,
    },

    input2: {
        marginBottom: 5,
        marginEnd: "1%",
        width: '49.5%',
    },
    input3: {
        marginBottom: 5,
        marginEnd: "1%",
        width: '18.5%',
    },
    input4: {
        marginBottom: 5,
        marginEnd: "1%",
        width: '30%',
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
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 10,
        marginTop: '15%',
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    formGroupTitle: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 10,
        width: '100%',
        marginTop: 10,
    },
    forgotPasswordText:{
        fontSize: 14,
        color: '#fff',
        marginBottom: 40,
        textDecorationLine: 'underline',
    }

});