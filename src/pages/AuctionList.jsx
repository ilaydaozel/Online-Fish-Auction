import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import AuctionCardList from '../components/AuctionCardList'
import AuctionForm from '../components/AuctionForm'
import styled from "styled-components";

const AuctionContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`


const AuctionButton = styled.button`
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
    margin-bottom: 20px;
    &:hover {
        background-color:#5ac8dd;}
`

const AuctionList = () => {
  const [buttonAuctionForm, setbuttonAuctionForm] = useState(false);
  return (
    <div>
      <Navbar />
      <AuctionCardList />
      <AuctionContainer>
        <AuctionButton onClick={() => setbuttonAuctionForm(true)}>Yeni Mezat Ekle</AuctionButton>
        <AuctionForm trigger={buttonAuctionForm} setTrigger={setbuttonAuctionForm}>
        </AuctionForm>
      </AuctionContainer>
    </div>
  )
}

export default AuctionList