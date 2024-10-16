import React from "react";

const ExploreApp = () => {
  return (
    <div
      className="explore-container px-5 py-10 bg-[#011c24] shadow-inner rounded-2xl m-5 space-y-5 flex flex-col justify-center items-center"
      style={{
        boxShadow: "inset -1px -1px 8px #63f2ff, inset 1px 1px 8px #63f2ff",
      }}
    >
      <center>
        <h1 className="text-slate-200 text-[24px] font-[roboto]">
          Explore Our <span className="text-[#62F0FE]">dApp</span>
        </h1>
      </center>
      <p className="text-slate-200 opacity-80 text-[14px] font-[roboto] text-center">
        EthAi is an Al-powered dApp designed to help traders make smarter,
        data-driven decisions. By tracking smart money flows, monitoring key
        wallets, and providing real-time market insights, EthAi empowers users
        to stay ahead of trends. The platform offers intuitive AI Freatures for
        asset recommendations, market analysis, and personalized crypto Q&A,
        making it the ultimate tool for both novice and experienced traders.
      </p>
      <button
        type="button"
        className="px-5 py-2 rounded-2xl outline-none shadow-inner shadow-[#37c5e5] bg-[#cdfcff] mt-3 font-[roboto]"
      >
        Open dApp
      </button>
    </div>
  );
};

export default ExploreApp;
