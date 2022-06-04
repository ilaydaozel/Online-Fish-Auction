import React from 'react'
import { useState } from "react";
import '../AuctionForm.css'
import BackspaceIcon from '@mui/icons-material/Backspace';
import PositiveNotification from './PositiveNotification';
import NegativeNotification from './NegativeNotification';
import OutsideClickHandler from 'react-outside-click-handler';

function AuctionForm(props) {

    const [added, setAdded] = useState(false);
    const [notAdded, setNotAdded] = useState(false);

    const [new_date, setnew_date] = useState('');
    const [new_time, setnew_time] = useState('');
    const [notif, setNotif] = useState("");


    const handleClose = () => {
        handleSubmit()
        props.setTrigger(false)
    }

    window.addEventListener("keyup", function (e) { if (e.keyCode == 27) props.setTrigger(false); }, false);

    const handleSubmit = (e) => {

        e.preventDefault();
        // var nowDate = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString();
        // console.log("now", nowDate)
        var date = new_date + 'T' + new_time + ':00Z'
        // console.log("date", denemedate);
        // console.log("şuanki date", ankiDate);

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
        }).then((response) => response.json(),
            setAdded(true),
        )
            .then((result) => {
                if (result.message !== "Mezat başarıyla eklendi") {
                    setNotAdded(true);
                }
                setNotif(result.message);
                console.log("res", result);
            })
    }

    return (props.trigger) ? (

        <div className="AuctionForm">
            <OutsideClickHandler onOutsideClick={() => props.setTrigger(false)}>
                <div className="AuctionForm-inner">
                    <div className="back">
                        <BackspaceIcon onClick={() => props.setTrigger(false)}></BackspaceIcon>
                        <h6>Geri Dön</h6>
                    </div>
                    <h3 style={{ color: '#1B4171', fontWeight: "bold" }}>Yeni Mezat Ekle</h3>
                    <form className="form" onSubmit={handleSubmit}>
                        <label style={{ paddingRight: "10px" }}>Bir tarih seçin:  </label>
                        <input
                            type="date"
                            required
                            value={new_date}
                            onChange={(e) => setnew_date(e.target.value)}
                        />
                        <br />
                        <br />
                        <label style={{ paddingRight: "10px" }}>Bir saat seçin:  </label>
                        <input
                            type="time"
                            required
                            value={new_time}
                            onChange={(e) => setnew_time(e.target.value)}
                        />
                        <br />
                        <br />
                        <button className="close-button" onClick={handleClose} >Yeni mezat ekle</button>
                        <PositiveNotification trigger={added} setTrigger={setAdded} message={notif}></PositiveNotification>
                        <NegativeNotification trigger={notAdded} setTrigger={setNotAdded} message={notif}></NegativeNotification>
                    </form>

                </div>
            </OutsideClickHandler>
        </div >
    ) : "";
}


export default AuctionForm


