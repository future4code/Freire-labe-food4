import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";

export const EditAddress = () => {
  const context = useContext(Context);

  useEffect(() => {
    context.setCurrentScreen("edit-adress");
  }, []);

  return <div>EditAddress</div>;
};
