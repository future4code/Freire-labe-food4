import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";

export const CartPage = () => {
  const context = useContext(Context);

  useEffect(() => {
    context.setCurrentScreen("cart");
  }, []);

  return <div>CartPage</div>;
};
