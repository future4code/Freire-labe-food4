import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";

export const RestaurantPage = () => {
  const context = useContext(Context);

  useEffect(() => {
    context.setCurrentScreen("restaurant");
  }, []);

  return <div>RestaurantPage</div>;
};
