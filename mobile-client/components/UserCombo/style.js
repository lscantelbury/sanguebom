import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    padding: 0;
    width: 75%;
`;

export const UserCombo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const ProfilePic = styled.Image`
    width: 60;
    height: 60;
    border-radius: 60;
    border-width: 2;
    border-color: #ff5757;
`

export const RankingInfo = styled.View`
    width: 40;
    height: 25;
    border-radius: 15;
    margin-left: -25;
    margin-top: 45;
`

export const RankingPos = styled.RankingPos`
    font-size: 12;
    color: #fff;
`