import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import AuctionCardList from '../components/AuctionCardList'
import AuctionForm from '../components/AuctionForm'

const AuctionList = () => {
  const [buttonAuctionForm, setbuttonAuctionForm] = useState(false);
  return (
    <div>
      <Navbar />
      <AuctionCardList />
      <button onClick={() => setbuttonAuctionForm(true)}>Mezat Ekle</button>
      <AuctionForm trigger={buttonAuctionForm} setTrigger={setbuttonAuctionForm}>
      </AuctionForm>
    </div>
  )
}

export default AuctionList