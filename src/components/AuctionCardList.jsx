import styled from "styled-components"
import { AuctionArray } from "../data"
import AuctionCard from "./AuctionCard"
import { mobile } from "../responsive"
// import React from 'react';
import React, { useState, useEffect } from "react";



const Container = styled.div`
`
const CardContainer = styled.div`
    display: flex;
    padding: 30px 100px;
    flex-wrap: wrap;
    justify-content: center;
    ${mobile({ padding: "10px", flexDirection: "column" })};
`
const Title = styled.h2`
    font-weight: 700;
    color: #1b4171;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 40px;
    ${mobile({ marginTop: "50px", marginBottom: "10px" })};
`

// function AuctionCardList() {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [auctionList, setAuctionList] = useState([]);
//     const [userList, setUserList] = useState([]);

//     useEffect(() => {
//         fetch("/auction")
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     setIsLoaded(true);
//                     setAuctionList(result);

//                 },
//                 (error) => {
//                     console.log(error);
//                     setIsLoaded(true);
//                     setError(error);
//                 })
//     }, []);

//     console.log(auctionList);

//     return (
//         <Container>
//             <Title> Güncel Mezatlar </Title>
//             <CardContainer>
//                 {
//                     auctionList.map((auction, i) => (
//                         <li key={i}>
//                             {auctionList.auctiunStatus}
//                         </li>
//                     ))
//                 }
//                 {AuctionArray.map(item => (
//                     <AuctionCard item={item} />
//                 ))}
//             </CardContainer>

//         </Container>
//     )
// }

const AuctionCardList = () => {
    // console.log("list:", AuctionArray)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [auctionList, setAuctionList] = useState([]);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        console.log("fetch");
        fetch('http://localhost:8080/auction')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setAuctionList(result);
                    console.log("res", result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log(error);
                })
    }, []);

    console.log(auctionList);

    return (
        <Container>
            <Title> Güncel Mezatlar </Title>
            <CardContainer>
                {
                    auctionList.map((auction, i) => (
                        <li key={i}>
                            {auctionList.auctiounStatus}
                        </li>
                    ))
                }
                {AuctionArray.map(item => (
                    <AuctionCard item={item} />
                ))}
            </CardContainer>

        </Container>
    )
}



export default AuctionCardList