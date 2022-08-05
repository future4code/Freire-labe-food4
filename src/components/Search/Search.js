import React from "react";
import styled from "styled-components"

const ContainerTipos = styled.div`
 display: flex;
 overflow-x: scroll;
 width: 90%;
 margin-left: 20px;
`
const Buttons = styled.button`
 border: none;
 margin: 10px;
 background-color: white;
 color: black;
`

export const Search = (props) => {
    
    return(
        <ContainerTipos>
            <Buttons onClick={() => props.setTipos("Árabe")}>Árabe</Buttons>
            <Buttons onClick={() => props.setTipos("Asiática")}>Asiática</Buttons>
            <Buttons onClick={() => props.setTipos("Baiana")}>Baiana</Buttons>
            <Buttons onClick={() => props.setTipos("Hamburguer")}>Hamburguer</Buttons>
            <Buttons onClick={() => props.setTipos("Carnes")}>Carnes</Buttons>
            <Buttons onClick={() => props.setTipos("Italiana")}>Italiana</Buttons>
            <Buttons onClick={() => props.setTipos("Mexicana")}>Mexicana</Buttons>
            <Buttons onClick={() => props.setTipos("Petiscos")}>Petiscos</Buttons>
            <Buttons onClick={() => props.setTipos("Sorvetes")}>Sorvetes</Buttons>
        </ContainerTipos>
    )
}