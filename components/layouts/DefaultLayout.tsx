import React from "react";
import { useAppSelector } from "../../store/hooks";
import Footer from "./Footer";
import MobileNavBar from "./MobileNavBar";
import NavBar from "./NavBar/NavBar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <NavBar />

      <MobileNavBar />

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
