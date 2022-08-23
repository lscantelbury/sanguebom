import { Text, TouchableOpacity } from 'react-native';
import { CardButtons, CardImage, CardLeft, CardRight, CardText, CardTitle } from './style';

export default function TextCard({ children, title, logo }) {
    return (
        <Card>
            <CardLeft>
                <CardImage source={logo}/>
            </CardLeft>
            <CardRight>
                <CardTitle>{title}</CardTitle>
                <CardText>
                    {children}
                </CardText>

                <CardButtons>
                    <TouchableOpacity style={styles.cardButton}>
                        {/* Svg Like */}
                        <Text style={styles.cardButtonText}>Seguir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardButton}>
                        {/* Svg Message */}
                        <Text style={styles.cardButtonText}>Mensagem</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardButton}>
                        {/* Svg Share */}
                        <Text style={styles.cardButtonText}>Compartilhar</Text>
                    </TouchableOpacity>
                </CardButtons>
            </CardRight>
        </Card>
    );
}