import styled from "styled-components"
import Navbar from "../components/Navbar"
import FishTable from "../components/FishTable"
import React from 'react';

const Container = styled.div`

`

const AuctionFishTable = () => {
  return (
    <Container>
        <Navbar />
        <FishTable/>
    </Container>
  )
}

export default AuctionFishTable