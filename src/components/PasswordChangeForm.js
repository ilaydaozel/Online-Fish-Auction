import React from 'react'
import { useState } from "react";
import BackspaceIcon from '@mui/icons-material/Backspace';
import PositiveNotification from './PositiveNotification';
import NegativeNotification from './NegativeNotification';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';

const PassChange = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);

    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const PassChangeFormInner = styled.div`
    position: relative;
    padding: 75px;
    width: 100%;
    max-width: 640px;
    background-color: white;
    text-align: center;
    border-radius: 16px;
`
const ChangeForm = styled.form`
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
`
const CloseButton = styled.button`
    color: white;
    background-color: #F76540;
    border: 0;
    border-radius: 8px;
    padding: 8px;
`
const Back = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`

function PasswordChangeForm(props) {

    window.addEventListener("keyup", function (e) { if (e.keyCode === 27) props.setTrigger(false); }, false);

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordAgain, setNewPasswordAgain] = useState('');

    const [changed, setChanged] = useState(false);
    const [notChanged, setNotChanged] = useState(false);
    const [notif, setNotif] = useState("");



    const handleClose = () => {
        handleSubmit()
        props.setTrigger(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== newPasswordAgain) {
            setNotif("Şifreler uyuşmuyor");
            setNotChanged(true);
        } else {
            fetch('http://localhost:8080/auth/changePass/' + props.userId, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    oldPassword: oldPassword,
                    password: newPassword
                }),
            }).then((response) => response.json(),
            )
                .then((result) => {

                    if (result.message !== 'Başarılı') {

                        setNotif('eski şifre hatalı');
                        setNotChanged(true);
                    }
                    else {
                        setNotif('Şifreniz Başarıyla Değiştirildi!');
                        setChanged(true);
                    }

                })
        }
    }



    return (props.trigger) ? (

        <PassChange>
            <OutsideClickHandler onOutsideClick={() => props.setTrigger(false)}>
                <PassChangeFormInner>
                    <Back>
                        <BackspaceIcon onClick={() => props.setTrigger(false)}></BackspaceIcon>
                        <h6>Geri Dön</h6>
                    </Back>
                    <h3 style={{ color: '#1B4171', fontWeight: "bold" }}>Şifreni Değiştir</h3>
                    <ChangeForm onSubmit={handleSubmit}>
                        <label style={{ paddingRight: "10px" }}>Eski Şifrenizi Girin:  </label>
                        <input
                            type="password"
                            required
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                        <br />
                        <br />
                        <label style={{ paddingRight: "10px" }}>Yeni Şifreyi Girin:  </label>
                        <input
                            type="password"
                            required
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <br />
                        <br />
                        <label style={{ paddingRight: "10px" }}>Yeni Şifreyi Tekrar Girin:  </label>
                        <input
                            type="password"
                            required
                            value={newPasswordAgain}
                            onChange={(e) => setNewPasswordAgain(e.target.value)}
                        />
                        <br />
                        <br />
                        <CloseButton onClick={handleClose} >Şifreni Değiştir</CloseButton>
                        <PositiveNotification trigger={changed} setTrigger={setChanged} message={notif}></PositiveNotification>
                        <NegativeNotification trigger={notChanged} setTrigger={setNotChanged} message={notif}></NegativeNotification>
                    </ChangeForm>

                </PassChangeFormInner>
            </OutsideClickHandler>
        </PassChange >
    ) : "";
}


export default PasswordChangeForm


