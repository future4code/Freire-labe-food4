import React from "react";
import LogoRappi from "../../imgs/logo-future-eats-invert_2022-08-01/logo-future-eats-invert.png";
import { ContainerLogin, ImgLogoRappi  } from "./style";

export const LoginPage = () => {
  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ContainerLogin>
        <ImgLogoRappi
            width="104px"
            height="58px"
            src={LogoRappi}
            alt="logo Rappi"
        />
          <strong>Entrar</strong>
          <input 
            placeholder="E-mail"
            type="text"
            required
          />
          <input 
            placeholder="Senha"
            required 
          />
          <button>Entrar</button>
          <div>
            <button>Não possui cadastro? clique aqui!</button>
          </div>
        </ContainerLogin>
      </form>
    </div>
  );
};
