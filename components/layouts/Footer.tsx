import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/footer-logo.svg";
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#212121] flex justify-start py-12 sm:py-24 sm:px-20  pl-5 text-white font-roboto">
      <div className="flex flex-col sm:flex-row justify-start w-[90%]">
        <div className="sm:w-[40%] sm:mb-0 mb-10 mr-20">
          <Image src={Logo} alt="footer-logo" />
          <p className="my-4">
            Proin sit varius sagittis malesuada elementum aliquet aliquam fusce
            ac. Interdum risus tortor.
          </p>
          <div className="flex text-white items-center ">
            <div className="mr-2 text-xl">
              <AiFillTwitterCircle />
            </div>
            <div className="mr-2 text-xl">
              <AiOutlineInstagram />
            </div>
            <div>
              <FaFacebook />
            </div>
          </div>
        </div>
        <div className="sm:w-[20%] sm:mb-0 mb-10">
          <h2 className="text-[20px] font-semibold mb-2">Shop</h2>
          <h3 className="text-[14px] mb-3">Categories</h3>
          <h3 className="text-[14px] mb-3">Inventory</h3>
        </div>

        <div className="sm:w-[20%] sm:mb-0 mb-10">
          <h2 className="text-[20px] font-semibold mb-2">Sell/Trade</h2>
          <h3 className="text-[14px] mb-3">Get an Online Offer</h3>
          <h3 className="text-[14px] mb-3">How It Works</h3>
        </div>

        <div className="sm:w-[20%]">
          <h2 className="text-[20px] font-semibold mb-2">About</h2>
          <h3 className="text-[14px] mb-3">About Dune</h3>
          <h3 className="text-[14px] mb-3">Contact Us</h3>
          <h3 className="text-[14px] mb-3">FAQ & Support</h3>
          <h3 className="text-[14px] mb-3">Contact Us</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
