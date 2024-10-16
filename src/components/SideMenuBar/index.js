import React from "react";
import { IoMdClose } from "react-icons/io";

const SideMenuBar = ({ showSideBar, setShowSideBar }) => {
  return (
    <div className="relative flex md:hidden">
      {showSideBar && (
        <div className="fixed min-h-full top-0 right-0 bottom-0 left-0 bg-[#ff000080]">
          <div>
            <div className="flex items-center justify-between">
              <div className="bg-[#0C2B2F] flex flex-col items-center px-5 py-3 space-y-10 min-h-[100vh] min-w-[40%] max-w-[300px]">
                <div className="self-end" onClick={() => setShowSideBar(!showSideBar)}>
                  <IoMdClose size={24} color={"white"} />
                </div>
                <a
                  href="#features"
                  className="text-[#b0faff] text-[16px] font-[roboto]"
                >
                  Features
                </a>
                <a
                  href="#about"
                  className="text-[#b0faff] text-[16px] font-[roboto]"
                >
                  Why Us
                </a>
                <a
                  href="#tokenomics"
                  className="text-[#b0faff] text-[16px] font-[roboto]"
                >
                  Tokenomics
                </a>
                <a
                  href="#roadmap"
                  className="text-[#b0faff] text-[16px] font-[roboto]"
                >
                  Roadmap
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between px-5 py-5 w-full">
        <div className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dhwz560kk/image/upload/v1728984897/jut1hyaexawvulguddun.png"
            alt="header_logo"
          />
        </div>

        <div>
          <button
            type="button"
            className="flex flex-col gap-1 cursor-pointer"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <span className="border-2 border-white w-[20px] rounded"></span>
            <span className="border-2 border-white w-[20px] rounded"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenuBar;
