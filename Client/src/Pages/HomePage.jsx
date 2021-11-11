import React from "react";
import { Home } from "../Components/Home/Home";
import { Navbar } from "../Components/Navbar/Navbar";
import BottomNav from "../Components/Navbar/BottomNav";
import { Theme } from "../Styles/Theme";

export const HomePage = () => {
  return (
    <Theme>
      <Navbar page="home" />
      <BottomNav page="home"/>
      <Home page="home" />
    </Theme>
  );
};
