import React from "react";

const Home = () => {
  return (
    <div id="home" className="flex flex-col justify-center items-center px-8 min-h-[100vh]">
      <h1 className="text-white text-[32px] font-sans font-thin text-center">
        When Innovation Meets <span className="text-slate-800 bg-[#b0f9ff] rounded-full px-3 font-light font-[roboto] text-[28px]">Innovation</span>
      </h1>
      <p className="text-[#b0faff] text-[14px] font-[roboto] mt-3 text-center">Empowering Trading Through Advanced Technology</p>
      <button type="button" className="px-5 py-2 rounded-2xl outline-none shadow-inner shadow-[#37c5e5] bg-[#cdfcff] mt-3 font-[roboto]">Open dApp</button>
    </div>
  );
};

export default Home;
