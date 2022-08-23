import styled from 'styled-components/native';

export const Card = styled.View`
    width: 85%;
    flex-direction: row;
    display: flex;
    box-shadow: 0px 0px 0.2px 1px #0f0f0f; 
    padding: 5;
    border-radius: 8;
    border: 1px solid #ff5757;
    margin-bottom: 20;
`

export const CardTitle = styled.Text`
    font-size: 14;
    font-weight: bold;
    color: #ff5757;
    margin-bottom: 5;
    padding-top: 10;
`

export const CardText = styled.Text`
    font-size: 12;
    color: #0f0f0f;
    margin-bottom: 35;
    padding-top: 10;
`

export const CardLeft = styled.View`
    width: 90;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
`

export const CardRight = styled.View`
    width: 70%;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
`
export const CardImage = styled.Image`
    width: 54;
    height: 54;
    margin: 12;
    align-items: center;
    justify-content: center;
`
export const CardButtons = styled.TouchableOpacity`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-self: flex-end;
    width: 100%;
    position: absolute;
    bottom: 0;
`