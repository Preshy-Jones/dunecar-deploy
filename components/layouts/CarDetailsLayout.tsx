import React from "react";
import SideBar from "../Search/SideBar";
import Footer from "./Footer";
import MobileNavBar from "./MobileNavBar/MobileNavBar";
import NavBar from "./NavBar/NavBar";

const CarDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <h1>maybe</h1>
      {/* <NavBar />

      <MobileNavBar />

      <div>
        <SideBar />
        <main>{children}</main>
      </div>
      <Footer /> */}
    </div>
  );
};

export default CarDetailsLayout;
