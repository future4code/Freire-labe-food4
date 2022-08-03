import { useContext } from "react";
import { Context } from "../../Context";
import { Container, HomeIcon, CartIcon, ProfileIcon } from "./style";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import {
  goToFeed,
  goToCartPage,
  goToProfilePage,
} from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const context = useContext(Context);
  const navigate = useNavigate();

  return (
    <Container currentScreen={context.currentScreen}>
      <HomeIcon
        onClick={() => goToFeed(navigate)}
        currentScreen={context.currentScreen}
      >
        <AiOutlineHome />
      </HomeIcon>
      <CartIcon
        onClick={() => goToCartPage(navigate)}
        currentScreen={context.currentScreen}
      >
        <AiOutlineShoppingCart />
      </CartIcon>
      <ProfileIcon
        onClick={() => goToProfilePage(navigate)}
        currentScreen={context.currentScreen}
      >
        <AiOutlineUser />
      </ProfileIcon>
    </Container>
  );
};
