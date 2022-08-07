import styled from "styled-components"

export const MainProfile=styled.main`
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 60px;
font-family: Arial, Helvetica, sans-serif;
`

export const ContainerCardName =styled.div`
display: flex;
justify-content: space-between;
font-family: Arial, Helvetica, sans-serif;
`
export const CardName =styled.div`
width: 90%;
padding-left: 1em;
font-family: Arial, Helvetica, sans-serif;
`
export const ContainerButtonName=styled.div`
width: 10%;
padding-top:16px;
align-items: center;
font-family: Arial, Helvetica, sans-serif;
`
export const ContainerCardAddress =styled.div`
display: flex;
`
export const CardAddress =styled.div`
font-family: Arial, Helvetica, sans-serif;
display: flex;
flex-direction: column;
background-color:#eeeeee ;
width: 90%;
padding-left:1em;
span{
    color:#c7c7cc
}
`
export const ContainerButtonAdress =styled.div`
background-color:#eeeeee ;
width: 10%;
padding-top:20px;
font-family: Arial, Helvetica, sans-serif;
`
export const DivHistory =styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
font-family: Arial, Helvetica, sans-serif;
`
export const Orderhistory =styled.p`
width: 96%;
border-bottom: 2px solid grey;
font-weight: 550;
margin-left: 0.5em;
font-family: Arial, Helvetica, sans-serif;
`;

// component CardOrder

export const ContainerOrderHistory=styled.div`
font-family: Arial, Helvetica, sans-serif;
display: flex;
flex-direction: column;
min-height: 10vh;
width: 90%;
border: 1px solid #c6c6c6;
border-radius:5px;
padding: 0.5em;
margin-bottom: 0.5em;
p{
  margin: 0.1em 0 0.1em 0;
}
`
export const RestauntName = styled.p`
color: #e86e5a;
font-family: 'Roboto', sans-serif;
`;
export const DatadoPedido=styled.p`
color:#b8b8b8;
font-family: 'Roboto', sans-serif;
`;
export const SubTotal=styled.p`
color:#000000;
font-family: 'Roboto', sans-serif;
font: bold;
`;
