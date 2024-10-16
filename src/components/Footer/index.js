import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="bg-[#000c0f] flex flex-col justify-center items-center p-5 border-t border-slate-600 rounded-tl-2xl rounded-tr-2xl py-16">
      <div className="flex items-center justify-center space-x-5">
        <img
          src="https://res.cloudinary.com/dhwz560kk/image/upload/v1728984897/jut1hyaexawvulguddun.png"
          alt="header_logo"
          className="w-7"
        />
        <span className="text-[32px] text-white">EthAi</span>
      </div>

      <div className="flex justify-center items-center gap-3 mt-8">
        <div className="bg-[#0c2b2f] rounded-full p-3">
          <FaTelegramPlane color="white" size={24}/>
        </div>
        <div className="bg-[#0c2b2f] rounded-full p-3">
          <FaInstagram color="white" size={24} />
        </div>
        <div className="bg-[#0c2b2f] rounded-full p-3">
          <FaTwitter color="white" size={24} />
        </div>
        <div className="bg-[#0c2b2f] rounded-full p-3">
          <FaFacebook color="white" size={24} />
        </div>
        <div className="bg-[#0c2b2f] rounded-full p-3">
          <FaDiscord color="white" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
