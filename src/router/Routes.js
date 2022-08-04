import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { SignUpAddress } from "../pages/SignUpAddress/SignUpAddress";
import { RestaurantPage } from "../pages/Restaurant/Restaurant";
import { DefaultPage } from "../pages/DefaultPage/DefaultPage";
import { Feed } from "../pages/Feed/Feed";
import { CartPage } from "../pages/CartPage/CartPage";
import { ProfilePage } from "../pages/Profile/Profile";
import { EditProfile } from "../pages/EditProfile/EditProfile";
import { EditAddress } from "../pages/EditAddress/EditAddress";
import { NavBar } from "../components/NavBar/NavBar";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/default" element={<DefaultPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup/address" element={<SignUpAddress />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/editprofile" element={<EditProfile />} />
        <Route path="/profile/editaddress" element={<EditAddress />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
};
