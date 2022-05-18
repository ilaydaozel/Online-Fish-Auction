import React, { useContext, useState } from "react";
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
import NegativeNotification from '../NegativeNotification';


export function LoginForm(props) {

  const { switchToSignup } = useContext(AccountContext);

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [er, setEr] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userMail: email,
        password: password
      }),
    }).then((response) => response.json())
      .then((result) => {
        if (result.userId) {
          localStorage.setItem("tokenKey", result.message)
          localStorage.setItem("currentUser", result.userId)
          localStorage.setItem("userMail", email)
          window.location.reload(true);
        } else {
          setEr(true);
        }
        console.log("result message", result);
      })

    setemail("");
    setpassword("");
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
      <NegativeNotification trigger={er} setTrigger={setEr} message="E-mail ya da şifre yanlış"></NegativeNotification>


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