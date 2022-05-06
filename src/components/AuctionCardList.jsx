import styled from "styled-components"
import { AuctionArray } from "../data"
import AuctionCard from "./AuctionCard"
import {mobile} from "../responsive"
import React from 'react';


const Container = styled.div`
`
const CardContainer = styled.div`
    display: flex;
    /*padding: 30px 200px;*/
    flex-wrap: wrap;
    justify-content: center;
    ${mobile({padding: "10px", flexDirection: "column"})};
`
const Title = styled.h2`
    font-weight: 700;
    color: #1b4171;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 40px;
    ${mobile({marginTop: "50px", marginBottom: "10px"})};
`

const AuctionCardList = () => {
 console.log("list:", AuctionArray)
  return (
    <Container>
        <Title> Güncel Mezatlar </Title>
        <CardContainer>
            {AuctionArray.map(item => (
                    <AuctionCard item={item}/>
            ))}
        </CardContainer>
        
    </Container>
  )
}

export default AuctionCardList