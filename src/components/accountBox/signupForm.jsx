import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import PositiveNotification from '../PositiveNotification';
import NegativeNotification from '../NegativeNotification';

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import EmailExistNotification from '../notifications/emailExistNotification';
import RegisterationSuccessNotification from '../notifications/registerationSuccessNotification';

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [isim, setisim] = useState('');
  const [soyisim, setsoyisim] = useState('');
  const [email, setemail] = useState('');
  const [adres, setadres] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');
  const [passwordagain, setpasswordagain] = useState('');

  const [emailexist, setemailexist] = useState(false);
  const [registersuccess, setregistersuccess] = useState(false);

  const [added, setAdded] = useState(false);
  const [notAdded, setNotAdded] = useState(false);
  const [error, setError] = useState();
  const [notif, setNotif] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userMail: email,
        name: isim,
        surname: soyisim,
        address: adres,
        phoneNum: phone,
        password: password,
        passwordAgain: passwordagain
      }),
    }).then((response) => response.json(),
      setAdded(true),
    ).then((result) => {
      if (result.message !== "Başarıyla kayıt olundu") {
        setNotAdded(true);
      }
      setNotif(result.message);
      console.log(result.message);
    }).then((error) => {
      // setNotAdded(true);
      console.log(notAdded);
      setError(error);
      console.log("err", error);
    })

    setemail("");
    setpassword("");
  }

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Input type="text" required placeholder="İsim" value={isim} onChange={(e) => setisim(e.target.value)} />
        <Input type="text" required placeholder="Soyisim" value={soyisim} onChange={(e) => setsoyisim(e.target.value)} />
        <Input type="email" required placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
        <Input type="address" required placeholder="Adres" value={adres} onChange={(e) => setadres(e.target.value)} />
        <Input type="phone" required placeholder="Telefon" value={phone} onChange={(e) => setphone(e.target.value)} />
        <Input type="password" required placeholder="Şifre" value={password} onChange={(e) => setpassword(e.target.value)} />
        <Input type="password" required placeholder="Şifre Tekrar" value={passwordagain} onChange={(e) => setpasswordagain(e.target.value)} />

        <SubmitButton>Kaydol</SubmitButton>

        <PositiveNotification trigger={added} setTrigger={setAdded} message={notif}></PositiveNotification>
        <NegativeNotification trigger={notAdded} setTrigger={setNotAdded} message={notif}></NegativeNotification>

      </FormContainer>


      <Marginer direction="vertical" margin={10} />

      {/* <SubmitButton type="submit" onClick={handleSubmit}>Kaydol</SubmitButton> */}

      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Hesabınız var mı?
        <BoldLink href="#" onClick={switchToSignin}>
          Gİriş Yapın
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

