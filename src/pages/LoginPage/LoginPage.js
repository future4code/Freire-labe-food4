import React from "react";
import LogoRappi from '../../imgs/logo-future-eats-invert_2022-08-01/logo-future-eats-invert.png'
import { ContainerLogin } from "./style";

export const LoginPage = () => {
    return (
        <div>
            <ContainerLogin>
                <img width="104px" height="58px" heit src={LogoRappi} alt="logo Rappi" />
                <strong>Entrar</strong>
                <input 
                placeholder="E-mail"
                />
                <input
                placeholder="Senha"
                />
                <button>
                    Entrar
                </button>
                <div>
                    <button>
                        Não possui cadastro? clique aqui!
                    </button>
                </div>
            </ContainerLogin>
        </div>
    )
}