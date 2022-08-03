import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";

export const SignUpPage = () => {
  const context = useContext(Context);

  useEffect(() => {
    context.setCurrentScreen("signup-page");
  }, []);

  return <div>SignUpPage</div>;
};
