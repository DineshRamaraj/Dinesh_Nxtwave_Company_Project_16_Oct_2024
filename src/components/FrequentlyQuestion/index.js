import React from "react";

const FrequentlyQuestions = () => {
  return (
    <div className="roadmap-container px-10 pb-20 flex flex-col md:flex-row ">
      <h1 className="font-sans text-slate-100 font-thin text-[32px] md:mt-7 md:px-20">
        Frequently Asked Questions
      </h1>
      <div className="space-y-1 mt-5">
        <div className="space-x-5">
          <span className="text-[#155d66] text-[32px] font-bold">+</span>
          <span className="text-slate-300 text-[22px] font-[space_grotestk]">
            What is EthAi?
          </span>
        </div>

        <div className="space-x-5">
          <span className="text-[#155d66] text-[32px] font-bold">+</span>
          <span className="text-slate-300 text-[22px] font-[space_grotestk]">
            How can EthAi can help me as a Trader?
          </span>
        </div>

        <div className="space-x-5">
          <span className="text-[#155d66] text-[32px] font-bold">+</span>
          <span className="text-slate-300 text-[22px] font-[space_grotestk]">
            Who can use EthAi?
          </span>
        </div>

        <div className="space-x-5">
          <span className="text-[#155d66] text-[32px] font-bold">+</span>
          <span className="text-slate-300 text-[22px] font-[space_grotestk]">
            How does EthAi track smart money flow?
          </span>
        </div>

        <div className="space-x-5">
          <span className="text-[#155d66] text-[32px] font-bold">+</span>
          <span className="text-slate-300 text-[22px] font-[space_grotestk]">
            How does ensure data security?
          </span>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestions;
