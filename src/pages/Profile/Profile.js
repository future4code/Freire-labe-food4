import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";
import { BASE_URL } from "../../constants/urls";
import { goToEditProfile } from "../../router/Coordinator";
import { goToSignUpAddress } from "../../router/Coordinator";
import { MainProfile, ContainerCardName, ContainerButtonName, CardName, ContainerCardAddress,Orderhistory, CardAddress, ContainerButtonAdress, Divgrey, DivHistory } from './styled'
import { ImPencil } from "react-icons/im";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import CardOrderHistory from "./CardOrderHistory";
import { useState } from "react";





export const ProfilePage = () => {
  const context = useContext(Context);

  useEffect(() => {
    context.setCurrentScreen("profile");
  }, []);
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()

  const getProfile = () => {
    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      }
    }
    axios
      .get(`${BASE_URL}/profile`, headers)
      .then((res) => {
        setProfile(res.data.user)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <MainProfile>
    <ContainerCardName>
      <CardName>
        <p>{profile.name && profile.name}</p>
        <p>{profile.email && profile.email}</p>
        <p>{profile.cpf && profile.cpf}</p>
      </CardName>
      <ContainerButtonName>
        <ImPencil onClick={()=>goToEditProfile(navigate)} />
      </ContainerButtonName>
    </ContainerCardName>

    <ContainerCardAddress>
      <CardAddress>
        <p><span>Endereço Casdastrado</span></p>
        <p>{profile.address && profile.address}</p>
      </CardAddress>
      <ContainerButtonAdress>
        <ImPencil onClick={()=>goToSignUpAddress(navigate)} />
      </ContainerButtonAdress>
    </ContainerCardAddress>
    <Orderhistory>Histórico de pedidos</Orderhistory>
    <DivHistory>
      <CardOrderHistory />
    </DivHistory>
    
  </MainProfile>
)
}

