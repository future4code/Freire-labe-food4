import React from "react";
import useForm from "../../hooks/useForm"
import LogoRappi from "../../imgs/logo-future-eats-invert_2022-08-01/logo-future-eats-invert.png";
import { ImgLogoRappi, ScreenContainer, ContainerSignup, ButtonCreate  } from "./style";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../router/Coordinator";




export const SignUpPage = () => {

    const navigate = useNavigate()
    const [form, onChange, clear] = useForm ({name: "", email: "", cpf: "", password: "", passwordok: "" })
 
    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log(form)
        /* signUp(form, clear, navigate) */
    } 

    return (
        <ScreenContainer>
            <ImgLogoRappi
                src={LogoRappi}
                alt="logo Rappi"
                onClick={()=>{goToLogin(navigate)}}
            />
            <form onSubmit={onSubmitForm}>      
                <ContainerSignup>
                    <strong>Cadastrar</strong>
                    <input 
                        placeholder="Nome Sobrenome"
                        onChange={onChange}
                    
                    />
                    <input 
                        placeholder="E-mail"
                        onChange={onChange}
                    />

                    <input 
                        placeholder="CPF"
                        onChange={onChange}
                        
                    />

                    <input 
                        placeholder="Senha"
                        onChange={onChange}
                        
                    />

                    <input 
                        placeholder="Confirmar Senha"
                        onChange={onChange}

                    />
                    <ButtonCreate>
                        Criar
                    </ButtonCreate>
                </ContainerSignup>
            </form>  
        </ScreenContainer>
)
}

