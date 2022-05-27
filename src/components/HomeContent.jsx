import styled from "styled-components";
import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FisherPhoto from '../images/fisher.jpg';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    margin-top: 100px;
`;

const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 0 0 20px;
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Title = styled.h1`
    font-size: 45px;
    font-weight: 700;
    color: #1b4171;
    text-align: center;
    margin-top: 70px;
    letter-spacing: .2rem;
`;

const Description = styled.h5`
    font-weight: 300;
    font-size: 18px;
    color: "black";
    text-align: center;
    
`;


const Image = styled.img`
    width: 90%;

`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F76540; 
    border: none;
    color: white;
    padding: 1.5% 6%;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    font-weight: 30px;
    border-radius: 10px;
    &:hover {
        background-color:#5ac8dd;}
`;


const Content = styled.div``


const HomeContent = () => {
    console.log("current user", localStorage.getItem("userRole"));
    console.log("result", localStorage)
    return (
        <Container>
            <Left>
                <Content>
                    <Title>Balıklıova Deniz Ürünleri Mezatı'na Hoş Geldiniz!</Title>
                    <Description>En taze balıkları oturduğunuz yerden satın almak için doğru yerdesiniz.</Description>
                </Content>
                <Link to={`/auctionList`} style={{ width: "100%", display: 'flex', justifyContent: 'center' }} >
                    <Button>Mezatları Gör <ChevronRightIcon /></Button>
                </Link>
            </Left>

            <Right>
                <Image src={FisherPhoto} />
            </Right>
        </Container>

    )
}

export default HomeContent