import styled from "styled-components/native";

export const BaseButton = styled.TouchableOpacity`
    ${props => props.variant === "default" && `
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #000;
    margin-top: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
    `}
`

export const Text = styled.Text`
    ${props => props.variant === "default" && `
    color: #fe5c8d;
    font-size: 18px;
    text-align: center;
    `}
`
