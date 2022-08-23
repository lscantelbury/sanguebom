import styled from "styled-components/native";

export const TextInput = styled.TextInput`
    ${props => props.variant === "default" && `
        width: 100%;
        border-color: white;
        border-width: 1;
        color: #fff;
        height: 50;
        padding-left: 10;
        border-radius: 3;
    `}
`