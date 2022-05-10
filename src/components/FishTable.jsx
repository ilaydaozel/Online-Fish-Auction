import styled from "styled-components";
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
import Typography from '@mui/material/Typography';

const Container= styled.div `
  margin: 100px 0 0 0;
`
const Title = styled.h2`
    font-weight: 700;
    color: #1b4171;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 40px;
`

function BasicTable(rows) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{backgroundColor:'#EEEEEE'} }>
            <TableCell> <Typography variant="h6" gutterBottom component="div" sx={{fontWeight: 'bold'}}>Balık Cinsi</Typography></TableCell>
            <TableCell align="right"><Typography variant="h6" gutterBottom component="div"  sx={{fontWeight: 'bold' }}>Kg</Typography></TableCell>
            <TableCell align="right"><Typography variant="h6" gutterBottom component="div"  sx={{fontWeight: 'bold'}}>Başlangıç Fiyatı</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.fishType}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fishType}
              </TableCell>
              <TableCell align="right">{row.amountKg}</TableCell>
              <TableCell align="right">{row.basePrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



const   FishTable = () => {
  const { auctionId } = useParams()
  let currentAuction = AuctionArray.find(item => item.aucId === parseInt(auctionId));
  let fishList = currentAuction.fishList
  let currentFish
  const fishData=[]

  for (let i = 0; i < fishList.length; i++) {
    console.log("balık list id", fishList[i])
    currentFish = Fish.find(item => item.fishId === parseInt(fishList[i]))
    console.log("current type", currentFish.type)
    const fishObj = {fishType: currentFish.type, amountKg: currentFish.weigthInKg,  basePrice: currentFish.basePrice}
    fishData.push(fishObj)
  }


  return (
    <Container>
    <Title> Mezatta Satılacak Balıklar</Title>
    {BasicTable(fishData)}
    </Container>
  )
}

export default FishTable