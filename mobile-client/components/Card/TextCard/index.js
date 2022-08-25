import { Text, TouchableOpacity } from 'react-native';
import { CardButtons, CardImage, CardLeft, CardRight, CardText, CardTitle, Card } from './style';

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
                    <TouchableOpacity >
                        {/* Svg Like */}
                        <Text >Seguir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        {/* Svg Message */}
                        <Text >Mensagem</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        {/* Svg Share */}
                        <Text >Compartilhar</Text>
                    </TouchableOpacity>
                </CardButtons>
            </CardRight>
        </Card>
    );
} 