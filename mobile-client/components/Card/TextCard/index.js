import { Text, TouchableOpacity, Image } from 'react-native';
import { CardButtons, CardImage, CardLeft, CardRight, CardText, CardTitle, Card } from './style';

export default function TextCard({ children, title, logo, variant, commentCount, sharePoints = 0}) {
    return (
        <Card>
            <CardLeft>
                <CardImage source={logo} />
            </CardLeft>
            <CardRight>
                <CardTitle>{title}</CardTitle>
                <CardText>
                    {children}
                </CardText>

                <CardButtons>
                    <TouchableOpacity  >
                        {
                            variant === 'liked' ?
                                (<Image source={require('../../../assets/heart-full-icon.png')} />)
                                :
                                (<Image source={require('../../../assets/heart-icon.png')} />)
                        }
                    </TouchableOpacity>
                    <TouchableOpacity style={

                        {
                            flexDirection: 'row',
                        }

                    }>
                        <Image source={require('../../../assets/comment-icon.png')} />
                        <Text
                            style={
                                {
                                    position: 'relative',
                                    color: '#ff5757',
                                    fontWeight: 'bold',
                                    top: -5,
                                }
                            }
                        > {commentCount}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={
                            {
                                flexDirection: 'row',
                            }
                        }
                    >
                        <Image source={require('../../../assets/share-icon.png')} />
                        <Text
                            style={
                                {
                                    position: 'relative',
                                    color: '#ff5757',
                                    fontWeight: 'bold',
                                    top: -5,
                                }
                            }
                        > +{sharePoints}</Text>
                    </TouchableOpacity>
                </CardButtons>
            </CardRight>
        </Card>
    );
} 