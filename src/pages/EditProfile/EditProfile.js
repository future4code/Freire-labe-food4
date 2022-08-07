import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";
import { ContainerProfileEddit, ProfileEdditForm,PostButton} from "./style"
import useForm from "../../hooks/useForm"
import { BASE_URL } from "../../constants/urls";
import { goToProfilePage } from "../../router/Coordinator";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {TextField} from "@mui/material"


export const EditProfile = () => {
  const context = useContext(Context);

  useEffect(() => {
    context.setCurrentScreen("edit-profile");
  }, []);

  const navigate = useNavigate()
  const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "" })
  console.log(form)

  const putUpdateProfile = () => {
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }
    axios
      .put(`${BASE_URL}/profile`, form, headers)
      .then((res) => {
        goToProfilePage(navigate)
        clear()
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  const onSubmit = (e) => {
    e.preventDefault()
    putUpdateProfile()
    console.log("bem-vindo")
  }

  return (
    <ContainerProfileEddit>
      
      <ProfileEdditForm onSubmit={onSubmit}>
        <TextField
          placeholder='Nome'
          value={form.name}
          name={"name"}
          onChange={onChange}
          type="text"
          required
          autoFocus
          variant="outlined"
          label="Nome"
          fullWidth
          margin="normal"
        />
        <TextField
          placeholder='E-mail'
          value={form.email}
          onChange={onChange}
          name={"email"}
          type="email"
          required
          autoFocus
          variant="outlined"
          label="E-mail"
          fullWidth
          margin="normal"
        />
        <TextField
        color='warning'
          placeholder='CPF'
          value={form.cpf}
          onChange={onChange}
          name={"cpf"}
          type="text"
          required
          autoFocus
          variant="outlined"
          label="CPF"
          fullWidth
          margin="normal"
        />
        <PostButton>Salvar</PostButton>

      </ProfileEdditForm>
    </ContainerProfileEddit>
  )
}
