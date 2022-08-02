import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 5px;

    input{
        position: relative;
        border: 1px solid #b8b8b8;
        height: 40px;
        outline: 0;
        &:nth-of-type(1){
            &::after{
                content: "E-mail para cadastrar aaaaaaa";
                /* font-size: 16px; */
                width: 10px;
                height: 18px;
                color: black;
                position: absolute;
                left: 0;
            }
        }
    }
`
export const ImgLogoRappi = styled.img`
    margin-bottom: 10px;
    width: 110px;
    height: 58px;
`
export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    justify-content: center;
    margin-top: 10vw;
`
export const ButtonSubmit = styled.button`
  width: 190px;
  height: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  color: black;
  margin: 5px;
  display: inline-block;
  background-color: #e86e5a;
  border-radius: 5px;
  border: none;
  `

  export const ButtonSignup = styled.button`
   border: none;
   text-decoration: none;
   background-color: white;
   font-size: 13px;
   align-items: center;
   padding-top: 10px;
   cursor: pointer;
  `
  