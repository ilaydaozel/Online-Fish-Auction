import styled from "styled-components"
import Navbar from "../components/Navbar"
import AuctionContent from "../components/AuctionContent"
import React from 'react';

const Container = styled.div`

`

const Auction = () => {
  return (
    <Container>
        <Navbar />
        <AuctionContent />
    </Container>
  )
}

export default Auction