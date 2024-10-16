import React from "react";

const Header = ({ showSideBar, setShowSideBar }) => {
  return (
    <div className="relative opacity-100 z-50">
      <div className="hidden md:flex md:px-6 md:py-3 w-full bg-[#061a1c] rounded-lg fixed top-0">
        <div className="flex justify-between items-center p-2 w-full">
          <a href="#home" className="flex items-center space-x-2 cursor-pointer">
            <img
              src="https://res.cloudinary.com/dhwz560kk/image/upload/v1728984897/jut1hyaexawvulguddun.png"
              alt="header_logo"
            />
            <span className="text-white text-[18px] font-[roboto]">EthAi</span>
          </a>
          <div className="flex items-center justify-between">
            <div className="bg-[#0C2B2F] flex items-center px-5 py-3 rounded-full space-x-5">
              <a
                href="#features"
                className="text-[#b0faff] text-[14px] font-[roboto]"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-[#b0faff] text-[14px] font-[roboto]"
              >
                Why Us
              </a>
              <a
                href="#tokenomics"
                className="text-[#b0faff] text-[14px] font-[roboto]"
              >
                Tokenomics
              </a>
              <a
                href="#roadmap"
                className="text-[#b0faff] text-[14px] font-[roboto]"
              >
                Roadmap
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white font-[roboto] text-[14px]">
              Login
            </button>
            <button
              type="button"
              className="px-3 py-1 rounded-xl outline-none shadow-inner shadow-[#37c5e5] bg-[#cdfcff] font-[roboto]"
            >
              Whitepaper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
