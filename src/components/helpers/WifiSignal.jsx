// WifiSignal.js
import React from "react";

const WifiSignal = () => {
  return (
    <div className="relative flex flex-col items-center justify-center space-y-1">
      <div className="w-[60px] h-[60px] border-[4px] bg-[rgb(0,0,255,0)]  absolute top-[9px]  border-[rgb(128,128,128,0)] border-t-[rgb(146,204,100)]  rounded-full wave wave-3"></div>
      <div className="w-[45px] h-[45px] border-[4px] bg-[rgb(0,0,255,0)]  absolute top-[11.5px] border-[rgb(128,128,128,0)] border-t-[rgb(146,204,100)]  rounded-full   wave-2"></div>
      <div className="w-[30px] h-[30px] border-[4px] bg-[rgb(0,0,255,0)]  absolute top-[19px]  border-[rgb(128,128,128,0)] border-t-[rgb(146,204,100)]  rounded-full  "></div>
      <div className="w-[5px] h-[5px] bg-black  absolute top-[27px]    rounded-full  "></div>
    </div>
  );
};

export default WifiSignal;
