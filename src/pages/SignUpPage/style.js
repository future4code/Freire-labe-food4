import styled from "styled-components"

export const ImgLogoRappi = styled.img`
    margin-bottom: 10px;
    width: 110px;
    height: 58px;
    cursor: pointer;
`

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    justify-content: center;
    margin-top: 10vw;
    input{
        height: 40px;
        outline: 0;
        border: 1px solid #b8b8b8
    }
`
export const ContainerSignup = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 5px;
`
export const ButtonCreate = styled.button`
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