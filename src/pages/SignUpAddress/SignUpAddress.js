import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";

export const SignUpAddress = () => {
  const context = useContext(Context);

  useEffect(() => {
    context.setCurrentScreen("signup-adress");
  }, []);

  return <div>cadastro endereco</div>;
};
