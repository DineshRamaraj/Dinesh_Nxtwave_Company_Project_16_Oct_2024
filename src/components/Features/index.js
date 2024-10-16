import React from "react";

const Features = () => {
  return (
    <div id="features" className="features-container flex flex-col justify-center items-center min-h-screen px-5 pt-28">
      <center className="mb-5">
        <h1 className="text-white text-[24px] font-[roboto]">Our Features</h1>
      </center>
      <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-4 gap-3">
        <div className="bg-[#0c2b2f] p-4 rounded-xl flex flex-col justify-evenly items-center border-2 border-[#113b41] md:row-span-2">
          <img
            src="https://res.cloudinary.com/dhwz560kk/image/upload/v1728990155/zy2nrtrhjxobmexjl5cg.png"
            alt="trade_image"
            className="w-20"
          />
          <div>
            <h1 className="text-white text-[18px] font-[roboto] mt-3 mb-3 text-center">
              Trade Optimizer
            </h1>
            <p className="text-[#b0faffb2] text-[14px] font-[roboto] text-center">
              Find the right moments to buy or sell, with personalized trade
              suggestions designed to help you make the most of every
              opportunity.
            </p>
          </div>
        </div>

        <div className="md:grid md:grid-cols-1 md:col-span-2 md:row-span-2 md:gap-3">
          <div className="bg-[url(https://res.cloudinary.com/dhwz560kk/image/upload/v1728992123/ptxfhiqoq7ycob6wgvhz.png)] bg-[#0c2b2f] bg-no-repeat bg-right bg-[length:auto_100%] rounded-xl p-4 border-2 border-[#113b41] md:row-span-2 md:h-[100%]">
            <h1 className="text-white text-[18px] font-[roboto] mt-3 mb-3">
              Market Insight
            </h1>
            <p className="text-[#b0faffb2] text-[14px] font-[roboto]">
              Stay ahead of the market. Get real time updates on market trends,
              track top traders' movements, and spot signals from key
              influencers.
            </p>
          </div>
          <div className="bg-[#0c2b2f] bg-no-repeat bg-right bg-[length:auto_100%] rounded-xl p-4 border-2 border-[#113b41] md:col-span-2 md:row-span-6 md:h-[100%] hidden md:flex"></div>
        </div>

        <div className="bg-[#0c2b2f] p-4 rounded-xl flex flex-col items-center border-2 border-[#113b41] md:row-span-2">
          <div className="md:order-5">
            <h1 className="text-white text-[18px] font-[roboto] mt-3 mb-3">
              Risk Guard
            </h1>
            <p className="text-[#b0faffb2] text-[14px] font-[roboto]">
              Get alerts on market swings and potential risks before they impact
              your portfolio. This agent helps you navigate volatility and stay
              prepared for anything.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dhwz560kk/image/upload/v1728993512/dbtcgp5ub6sqkgdcbtwk.png"
            alt="trade_image"
            className="w-[90%] h-[50%] max-w-[200px] md:order-0"
          />
        </div>

        <div className="bg-[url(https://res.cloudinary.com/dhwz560kk/image/upload/v1728994867/ypnqbd6tv9ao1xd20h3u.png)] bg-[#0c2b2f] bg-no-repeat bg-[length:120px] bg-right-bottom rounded-xl p-4 border-2 border-[#113b41] pr-20 md:col-span-2">
          <h1 className="text-white text-[18px] font-[roboto] mt-3 mb-3">
            Portfolio Sync
          </h1>
          <p className="text-[#b0faffb2] text-[14px] font-[roboto]">
            Easily manage your portfolio. You'll always know what you own, how
            it's performing, and where it's headed.
          </p>
        </div>

        <div className=" bg-[#0c2b2f] rounded-xl p-4 pb-0 pr-0 border-2 border-[#113b41] md:col-span-2">
          <h1 className="text-white text-[18px] font-[roboto] mt-3 mb-3">
            Opportunity Scout
          </h1>
          <p className="text-[#b0faffb2] text-[14px] font-[roboto] pr-4">
            Find exciting new projects, events and tokens that others might be
            missing. Identifying promising opportunities early, so you never
            miss out on the next big thing.
          </p>
          <div className="flex justify-end">
            <img
              src="https://res.cloudinary.com/dhwz560kk/image/upload/v1728995239/exm17kksnuuhpysdnl7l.png"
              alt="opportunity_image"
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
