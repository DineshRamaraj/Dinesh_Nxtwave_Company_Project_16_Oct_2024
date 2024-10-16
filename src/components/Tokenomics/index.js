import React from "react";

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="tokenomics-container px-5 pb-20">
      <center>
        <h1 className="text-white text-[24px] font-[roboto]">Tokenomics</h1>
      </center>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
        <div className="flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dhwz560kk/image/upload/v1729059242/nqx5sde7oerd7fxg1p2a.png"
            alt="tokenomics"
            className="w-[60%] md:w-[80%] md:h-[80%]"
          />
        </div>

        <div className="space-y-3">
          <div className="bg-[#0c2b2f] rounded-xl p-4 border-2 border-[#113b41] space-y-4">
            <div className="my-3 flex items-center">
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[30%]">
                Name
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[10%]">
                :
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[60%]">
                EthAi
              </span>
            </div>

            <div className="my-3 flex items-center">
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[30%]">
                Token Name
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[10%]">
                :
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[60%]">
                $EthAi
              </span>
            </div>

            <div className="my-3 flex items-center">
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[30%]">
                Token standard
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[10%]">
                :
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[60%]">
                ERC20
              </span>
            </div>

            <div className="my-3 flex items-center">
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[30%]">
                Blockchain
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[10%]">
                :
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[60%]">
                Ethereum
              </span>
            </div>

            <div className="my-3 flex items-center">
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[30%]">
                Total Supply
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[10%]">
                :
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[60%]">
                100 Million
              </span>
            </div>

            <div className="my-3 flex items-center">
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[30%]">
                Tax
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[10%]">
                :
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[60%]">
                5%/5%
              </span>
            </div>
          </div>

          <div className="bg-[#0c2b2f] rounded-xl p-4 border-2 border-[#113b41] space-y-4">
            <div className="my-3 flex items-center">
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[30%]">
                Team
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[10%]">
                :
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[60%]">
                35%
              </span>
            </div>

            <div className="my-3 flex items-center">
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[30%]">
                Marketing
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[10%]">
                :
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[60%]">
                5%
              </span>
            </div>

            <div className="my-3 flex items-center">
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[30%]">
                Liquidity Pool
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[10%]">
                :
              </span>
              <span className="text-white text-[16px] font-[roboto] w-[40%] md:w-[60%]">
                90%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
