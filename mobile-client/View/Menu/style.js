import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 30px;
`
export const Header = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 120px;
    border-bottom-width: 3px;
    border-bottom-color: #ff5757;
`
export const HeaderLeft = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 25%;
    height: 100%;
    padding-left: 20px;
    padding-top: 20px;
`

export const HeaderRight = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 75%;
    height: 100%;
    padding-left: 20px;
    padding-top: 20px;
`

export const Divider = styled.View`
    height: 50%;
    width: 2px;
    marginLeft: 10px;
    backgroundColor: #ff5757;
    marginTop: 10px;
`
export const Body = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    paddingTop: 32px;
`
