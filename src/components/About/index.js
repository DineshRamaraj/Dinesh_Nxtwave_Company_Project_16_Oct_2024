import React from "react";

const About = () => {
  return (
    <div id="about" className="about-container px-5 pt-28 flex flex-col">
      <div className="flex flex-col items-center">
        <center className="mb-3">
          <h1 className="text-white text-[24px] font-[roboto]">About EthAi</h1>
        </center>
        <p className="text-[#b0faffb2] text-[14px] font-[roboto] text-center px-4">
          At Eth Ai, we're all about making crypto trading easier and more
          intuitive. We provide tools that help traders keep up with all new
          market trends, track top traders' movements.
        </p>
        <button
          type="button"
          className="px-5 py-2 rounded-2xl outline-none shadow-inner shadow-[#37c5e5] bg-[#cdfcff] mt-3 font-[roboto]"
        >
          Read more
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#0c2b2f] rounded-xl p-4 pb-0 pr-0 border-2 border-[#113b41] mt-20 gap-5">
        <div className="p-5">
          <div className="flex">
            <img
              src="https://res.cloudinary.com/dhwz560kk/image/upload/v1729056312/sxahf1cheqdbcfi5r7l5.png"
              alt="opportunity_image"
              className="w-8"
            />
          </div>
          <h1 className="text-white text-[18px] font-[roboto] mt-3 mb-3">
            Stay Ahead
          </h1>
          <p className="text-[#b0faffb2] text-[14px] font-[roboto] pr-4">
            No more guesswork--get clear, trustable insights.
          </p>
        </div>
        <div className="p-5">
          <div className="flex">
            <img
              src="https://res.cloudinary.com/dhwz560kk/image/upload/v1729056301/yk731xlbrfzbj7td5x5a.png"
              alt="opportunity_image"
              className="w-8"
            />
          </div>
          <h1 className="text-white text-[18px] font-[roboto] mt-3 mb-3">
            Know Your Assets
          </h1>
          <p className="text-[#b0faffb2] text-[14px] font-[roboto] pr-4">
            Always stay on top of how your investments are performing.
          </p>
        </div>
        <div className="p-5">
          <div className="flex">
            <img
              src="https://res.cloudinary.com/dhwz560kk/image/upload/v1729056751/jmymkabxjsdudjp9syzf.png"
              alt="opportunity_image"
              className="w-8"
            />
          </div>
          <h1 className="text-white text-[18px] font-[roboto] mt-3 mb-3">
            Simple, Not Overwhelming
          </h1>
          <p className="text-[#b0faffb2] text-[14px] font-[roboto] pr-4">
            Our tools are designed to make complex market analysis easy to
            understand and act on.
          </p>
        </div>
        <div className="p-5">
          <div className="flex">
            <img
              src="https://res.cloudinary.com/dhwz560kk/image/upload/v1729056815/qajjyzdvz4vq4xv4moxd.png"
              alt="opportunity_image"
              className="w-8"
            />
          </div>
          <h1 className="text-white text-[18px] font-[roboto] mt-3 mb-3">
            Future-Proof
          </h1>
          <p className="text-[#b0faffb2] text-[14px] font-[roboto] pr-4">
            We're constantly improving, adding new features to help you make the
            most informed decisions possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
