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
import emailDoesntExistNotification from '../notifications/emailDoesntExistNotification';
import wrongPasswordNotification from '../notifications/wrongPasswordNotification';
import loginSuccessNotification from '../notifications/loginSuccessNotification';
import { Navigate } from "react-router-dom";

export function LoginForm(props) {

  const { switchToSignup } = useContext(AccountContext);

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const [emaildoesntexist, setemaildoesntexist] = useState(false);
  const [wrongpassword, setwrongpassword] = useState(false);
  const [loginsuccess, setloginsuccess] = useState(false);

  const [flag, setflag] = useState(false);
  //let navigate = Navigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userMail: email,
        password: password
      }),
    }).then((response) => response.json()
    ).then((result) => {
      localStorage.setItem("tokenKey", result.message);
      localStorage.setItem("currentUser", result.userId);
      localStorage.setItem("userMail", email)
      console.log(result.message);
      window.location.reload(true);

    })

    setemail("");
    setpassword("");
    // history.go("/login");

    //navigate.href("/login")



  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />

      <SubmitButton type="submit" onClick={handleSubmit} >Giriş Yap</SubmitButton>
      <emailDoesntExistNotification trigger={emaildoesntexist} setTrigger={setemaildoesntexist}></emailDoesntExistNotification>
      <wrongPasswordNotification trigger={wrongpassword} setTrigger={setwrongpassword}></wrongPasswordNotification>
      <loginSuccessNotification trigger={loginsuccess} setTrigger={setloginsuccess}></loginSuccessNotification>


      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Hesabınız yok mu?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Şimdi Kaydol!
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}