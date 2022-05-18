import styled from "styled-components"
import AuctionCard from "./AuctionCard"
import { mobile } from "../responsive"
import React, { useState, useEffect } from "react";



const Container = styled.div`
`
const CardContainer = styled.div`
    display: flex;
    padding: 30px 50px;
    flex-wrap: wrap;
    justify-content: center;
    ${mobile({ padding: "10px", flexDirection: "column" })};
`
const Title = styled.h1`
    font-weight: 1000;
    color: #1b4171;
    text-align: center;
    margin-top: 100px;
    ${mobile({ marginTop: "50px", marginBottom: "10px" })};
`
const TopContainer = styled.div`
`
const BottomContainer = styled.div``

const AuctionCardList = () => {
    const [auctionList, setAuctionList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/auction/getSortedAuctions')
            .then(res => res.json())
            .then(
                (result) => {
                    setAuctionList(result);
                })
    });

    return (
        <Container>
            <Title> Güncel Mezatlar </Title>
            <CardContainer>
                {auctionList.map(item => (
                    (item.auctionStatus === "OPEN") ? <TopContainer><AuctionCard item={item} key={item.id} /></TopContainer> : (item.auctionStatus === "STARTING") ? <BottomContainer><AuctionCard item={item} key={item.id} /></BottomContainer> : ""))
                }
            </CardContainer>
        </Container>
    )
}



export default AuctionCardList