import React, { useContext, useState, useEffect } from "react";
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
import emailExistNotification from '../notifications/emailExistNotification';
import registerationSuccessNotification from '../notifications/registerationSuccessNotification';

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [isim, setisim] = useState('');
  const [soyisim, setsoyisim] = useState('');
  const [email, setemail] = useState('');
  const [adres, setadres] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');
  const [passwordagain, setpasswordagain] = useState('');

  const [flag, setflag] = useState(true);
  const [emailexist, setemailexist] = useState(false);
  const [registersuccess, setregistersuccess] = useState(false);
  const [userList, setUserList] = useState(false);
  
  useEffect(() => {
    fetch('http://localhost:8080/user')
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        setUserList(result);
      })
    });
    
    const isExist = () => {
      {userList.map(item => (
        (item.email === email)? invalidemail() : ""))
      }
      
    }
    
    const invalidemail = () => {
      setemailexist(true);
      setflag(false);
  
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    isExist();

    if(flag){
      fetch('http://localhost:8080/user', {
              method: 'POST',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ 
                  //
              }),
              }).then((response) => response.json()

              )
              .then((result) => {
                  console.log("ekledi");

              })
      setregistersuccess(true);
    }
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="İsim" value={isim} onChange={(e) => setisim(e.target.value)}/>
        <Input type="text" placeholder="Soyisim"  value={soyisim} onChange={(e) => setsoyisim(e.target.value)}/>
        <Input type="email" placeholder="Email"  value={email} onChange={(e) => setemail(e.target.value)}/>
        <Input type="address" placeholder="Adres"  value={adres} onChange={(e) => setadres(e.target.value)}/>
        <Input type="phone" placeholder="Telefon"  value={phone} onChange={(e) => setphone(e.target.value)}/>
        <Input type="password" placeholder="Şifre"  value={password} onChange={(e) => setpassword(e.target.value)}/>
        <Input type="password" placeholder="Şifre Tekrar"  value={passwordagain} onChange={(e) => setpasswordagain(e.target.value)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />

      <SubmitButton type="submit" onClick= {handleSubmit}>Kaydol</SubmitButton>
      <emailExistNotification trigger={emailexist} setTrigger={setemailexist}></emailExistNotification>
      <registerationSuccessNotification trigger={registersuccess} setTrigger={setregistersuccess}></registerationSuccessNotification>
      
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

