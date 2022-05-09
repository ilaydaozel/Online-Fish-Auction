import styled from "styled-components"
import logoImage from "../images/logo.png"
import { AccountBox } from "../components/accountBox";
import React from 'react';


const Container=styled.div`
    display:flex;
    align-content: space-between;

`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Left =styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Right =styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const LogoImage = styled.img`
    width: 200px;
    margin: 20px auto 0;
    
`
const Title = styled.h2`
    font-weight: 700;
    color: #1b4171;
    text-align: center;
    margin-top: 80px;
    `


const Login = () => {
  return (
    <Container>
    <Left>
    <Title><div>Balıklıova </div>Deniz Ürünleri Mezatı</Title>
    <LogoImage src={logoImage} ></LogoImage>
    </Left>

    <Right>
        <AppContainer><AccountBox/></AppContainer>
    </Right>
    </Container>

  )
}

export default Login