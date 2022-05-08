import React, { useContext } from "react";
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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="İsim" />
        <Input type="text" placeholder="Soyisim" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Şifre" />
        <Input type="address" placeholder="Adres" />
        <Input type="phone" placeholder="Telefon" />
        <Input type="password" placeholder="Şifre Tekrar" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Kaydol</SubmitButton>
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
