import React from 'react'
import { useState } from "react";
import '../AuctionForm.css'
import BackspaceIcon from '@mui/icons-material/Backspace';

function AuctionForm(props) {

    const [new_date, setnew_date] = useState('');

    const handleClose = () => {
        handleSubmit()
        props.setTrigger(false)
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        var date = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString();        
        console.log(date);
        fetch('http://localhost:8080/auction', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                auctionStatus: "STARTING",
                auctionStart: date,
                auctionEnd: "",
                fishList: [],
                bidList: null
            }),
            }).then((response) => response.json())
            .then((result) => {
                console.log("ekledi");
            })
    }

    return (props.trigger) ? (

        <div className="AuctionForm">
            <div className="AuctionForm-inner">
                <div className="back">
                    <BackspaceIcon onClick={() => props.setTrigger(false)}></BackspaceIcon>
                    <h6>Geri Dön</h6>
                </div>
                <h3 style={{color: '#1B4171', fontWeight: "bold"}}>Yeni Mezat Ekle</h3>
                <form  className="form" onSubmit={handleSubmit}>
                    <label style={{paddingRight: "10px"}}>Yeni mezat için bir tarih girin:  </label>
                    <input  
                    type="date" 
                    required 
                    value={new_date}
                    onChange={(e) => setnew_date(e.target.value)}
                    />
                    <br />
                    <br />
                    <button className="close-button" onClick= {handleClose} >Yeni mezat ekle</button>
                </form>
                
            </div>
        </div>
  ) : "";
}


export default AuctionForm


