import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    padding: 0px;
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
    width: 60px;
    height: 60px;
    border-radius: 60px;
    border-width: 2px;
    border-color: #ff5757;
`

export const RankingInfo = styled.View`
    width: 40px;
    height: 25px;
    border-radius: 15px;
    margin-left: -25px;
    margin-top: 45px;
`

export const RankingPos = styled.View`
    font-size: 12px;
    color: #fff;
`