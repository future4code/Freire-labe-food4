import React, { useContext, useEffect } from "react";
import useForm from "../../hooks/useForm";
import LogoRappi from "../../imgs/logo-future-eats-invert_2022-08-01/logo-future-eats-invert.png";
import {
  ImgLogoRappi,
  ScreenContainer,
  ContainerSignup,
  ButtonCreate,
} from "./style";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../router/Coordinator";
import { signUp } from "../../services/user";
import { Context } from "../../Context";

export const SignUpPage = () => {
  const context = useContext(Context);

  useEffect(() => {
    context.setCurrentScreen("signup-page");
  }, []);

  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    passwordok: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
    signUp(form, clear, navigate);
    /* signUp(form, clear, navigate) */
  };

  return (
    <ScreenContainer>
      <ImgLogoRappi
        src={LogoRappi}
        alt="logo Rappi"
        onClick={() => {
          goToLogin(navigate);
        }}
      />
      <form onSubmit={onSubmitForm}>
        <ContainerSignup>
          <strong>Cadastrar</strong>
          <input
            name={"name"}
            placeholder="Nome Sobrenome"
            onChange={onChange}
            type={"name"}
            value={form.name}
          />
          <input 
            name={"email"}
            placeholder="E-mail" 
            onChange={onChange} 
            type={"email"} 
            value={form.email}
          />
          <input
            name={"cpf"} 
            placeholder="CPF" 
            onChange={onChange} 
            value={form.cpf}
            type={"number"}
           />
          <input 
            name={"password"}
            placeholder="Senha" 
            onChange={onChange} 
            value={form.password}
            type={"password"}
            required
            />
          <input 
            name={"passwordok"}
            placeholder="Confirmar Senha" 
            onChange={onChange} 
            value={form.passwordok}
            type={"password"}
            required
          />
          <ButtonCreate>Criar</ButtonCreate>
        </ContainerSignup>
      </form>
    </ScreenContainer>
  );
};
