import React from "react";
import Rate from "@/public/Assets/RateNew.png";

const Rates = () => {
  return (
    <div className="flex ">
      <div className="w-1/2 ">
        <div className="h-full flex items-center justify-center flex-col ">
          <div className="font-scotia pb-3">
            <p className="text-left font-semibold text-1xl ">
              WE OFFER YOU AN EXCLUSIVE, EXECUTIVE EXPERIENCE
            </p>
          </div>

          <div className="text-white">
            <p className="text-left text-2xl font-semibold font-scotia">
              WITH THE MOST <br />
              SUITABLE RATES <br />
              AND EXCEPTIONALS <br />
              SERVICE
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 ">
        <img src={Rate.src} alt="" />
      </div>
    </div>
  );
};

export default Rates;
