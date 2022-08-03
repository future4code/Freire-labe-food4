import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";

export const DefaultPage = () => {
  const context = useContext(Context);

  useEffect(() => {
    context.setCurrentScreen("default");
  }, []);

  return <div>DefaultPage</div>;
};
