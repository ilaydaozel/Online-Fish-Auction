import styled from "styled-components";
import React, { useState, useEffect } from 'react';
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
  const [error, setError] = useState(null);
  const [auctionList, setAuctionList] = useState([]);

  useEffect(() => {
      console.log("fetch");
      fetch('http://localhost:8080/auction')
          .then(res => res.json())
          .then(
              (result) => {
                  setAuctionList(result);
                  console.log("result auuc", result);
              },
              (error) => {
                  setError(error);
                  console.log(error);
              })
  }, []);

  console.log(auctionList);
  const fishData=[]

  let currentAuction = auctionList.find(item => item.id === auctionId);
 /* console.log("cur auc", currentAuction.fishList)
  let curFishList

  if(currentAuction.fishList.length>0){
    curFishList = currentAuction.fishList;
    for (let i = 0; i < curFishList.length; i++) {
      console.log("current", curFishList[i])
      const fishObj = {fishType: curFishList[i].fishType, amountKg: curFishList[i].fishAmount,  basePrice: curFishList[i].basePrice}
      fishData.push(fishObj)
    }
  }
*/



  return (
    <Container>
    <Title> Mezatta Satılacak Balıklar</Title>
    {BasicTable(fishData)}
    </Container>
  )
}

export default FishTable