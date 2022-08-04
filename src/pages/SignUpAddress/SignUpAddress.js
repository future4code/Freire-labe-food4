import axios from "axios";
import React from "react";
import { useContext, useEffect } from "react";
import { BASE_URL } from "../../constants/urls";
import { Context } from "../../Context";
import { goToFeed } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import {
  ContainerLogin,
  ScreenContainer,
  ButtonSubmit,
} from "../LoginPage/style";

export const SignUpAddress = () => {
  const context = useContext(Context);

  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    // login(form, clear, navigate);
  };

  useEffect(() => {
    context.setCurrentScreen("signup-adress");
  }, []);

  const addAddress = () => {
    const headers = {
      auth: localStorage.getItem("token"),
    };
    axios
      .put(`${BASE_URL}rappi4B/address`, form, { headers: headers })
      .then(() => {
        goToFeed(navigate);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
  <ScreenContainer>
      <form onSubmit={handleSubmit}>
        <ContainerLogin>
          <strong>Meu endereço</strong>
          <input
            name={"street"}
            type={"street"}
            onChange={onChange}
            value={form.street}
            placeholder="Rua/Avenida*"
            required
          />
          <input
            name={"number"}
            type={"number"}
            onChange={onChange}
            value={form.number}
            placeholder="Número*"
            required
          />
          <input
            name={"neighbourhood"}
            type={"neighbourhood"}
            onChange={onChange}
            value={form.neighbourhood}
            placeholder="Apto./Bloco*"
            required
          />
          <input
            name={"city"}
            type={"city"}
            onChange={onChange}
            value={form.city}
            placeholder="Bairro*"
            required
          />
          <input
            name={"state"}
            type={"state"}
            onChange={onChange}
            value={form.state}
            placeholder="Cidade*"
            required
          />
          <input
            name={"complement"}
            type={"complement"}
            onChange={onChange}
            value={form.complement}
            placeholder="Estado*"
            required
          />
          <ButtonSubmit onClick={() => addAddress()} type={"submit"}>Salvar</ButtonSubmit>
        </ContainerLogin>
      </form>
    </ScreenContainer>
)};
