import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";
import LogoRappi from "../../imgs/logo-future-eats-invert_2022-08-01/logo-future-eats-invert.png";
import {
  ContainerLogin,
  ImgLogoRappi,
  ScreenContainer,
  ButtonSubmit,
  ButtonSignup,
} from "./style";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToSignup } from "../../router/Coordinator";

export const LoginPage = () => {
  const context = useContext(Context);

  useEffect(() => {
    context.setCurrentScreen("login");
  }, []);

  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <ImgLogoRappi src={LogoRappi} alt="logo Rappi" />
      <form onSubmit={handleSubmit}>
        <ContainerLogin>
          <strong>Entrar</strong>
          <input
            name={"email"}
            placeholder="E-mail"
            type={"email"}
            onChange={onChange}
            value={form.email}
            required
          />
          <input
            name={"password"}
            placeholder="Senha"
            type={"password"}
            onChange={onChange}
            value={form.password}
            required
          />
          <ButtonSubmit type={"submit"}>Entrar</ButtonSubmit>
          <div>
            <ButtonSignup
              onClick={() => {
                goToSignup(navigate);
              }}
            >
              Não possui cadastro? <b>clique aqui!</b>
            </ButtonSignup>
          </div>
        </ContainerLogin>
      </form>
    </ScreenContainer>
  );
};
