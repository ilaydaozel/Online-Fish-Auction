import styled from "styled-components"
import React from 'react';
import { useParams } from "react-router-dom";
import {AuctionArray} from "../data"
import {Fish} from "../data"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Container = styled.div`
  width: 200px;
  background-color: "yellow";
`




const   FishTable = () => {
  const { auctionId } = useParams()
  let currentAuction = AuctionArray.find(item => item.aucId === parseInt(auctionId));
  let fishList = currentAuction.fishList
  let currentFish
  const row=[]

  for (let i = 0; i < fishList.length; i++) {
    console.log("balık list id", fishList[i])
    currentFish = Fish.find(item => item.fishId === parseInt(fishList[i]))
    console.log("current type", currentFish.type)
    const fishObj = {fishType: currentFish.type, amountKg: currentFish.weigthInKg,  basePrice: currentFish.basePrice}
    row.push(fishObj)
  }

  return (
    <Container>

    </Container>
  )
}

export default FishTable