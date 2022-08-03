import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";

export const ProfilePage = () => {
  const context = useContext(Context);

  useEffect(() => {
    context.setCurrentScreen("profile");
  }, []);

  return <div>ProfilePage</div>;
};
