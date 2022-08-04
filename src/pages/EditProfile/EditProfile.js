import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";

export const EditProfile = () => {
  const context = useContext(Context);

  useEffect(() => {
    context.setCurrentScreen("edit-profile");
  }, []);

  return <div>EditProfile</div>;
};
