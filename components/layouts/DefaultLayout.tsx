import React from "react";
import Footer from "./Footer";
import MobileNavBar from "./MobileNavBar";
import NavBar from "./NavBar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <NavBar />
      <div>
        <div className="md:hidden">
          <MobileNavBar />
        </div>
      </div>

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
