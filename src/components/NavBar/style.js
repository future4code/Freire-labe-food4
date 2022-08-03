import styled from "styled-components";

export const Container = styled.div`
  background-color: #eeeeee50;
  border-top: 1px solid #c9c9c9;
  max-width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  color: #b8b8b8;

  ${(props) => {
    if (
      props.currentScreen === "feed" ||
      props.currentScreen === "cart" ||
      props.currentScreen === "profile"
    ) {
      return "display: flex; ";
    } else {
      return "display: none;";
    }
  }}
`;

export const HomeIcon = styled.div`
  svg {
    height: 25px;
    width: 25px;

    ${(props) => {
      if (props.currentScreen === "feed") {
        return "color: #e45a43;";
      }
    }}
  }

  :hover {
    cursor: pointer;
    background-color: #eeeeee;
    border-radius: 5px;
  }
`;

export const CartIcon = styled.div`
  svg {
    height: 25px;
    width: 25px;

    ${(props) => {
      if (props.currentScreen === "cart") {
        return "color: #e45a43;";
      }
    }}
  }

  :hover {
    cursor: pointer;
    background-color: #eeeeee;
    border-radius: 5px;
  }
`;

export const ProfileIcon = styled.div`
  svg {
    height: 25px;
    width: 25px;

    ${(props) => {
      if (props.currentScreen === "profile") {
        return "color: #e45a43;";
      }
    }}
  }

  :hover {
    cursor: pointer;
    background-color: #eeeeee;
    border-radius: 5px;
  }
`;
