import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuArrowRight } from "react-icons/lu";
import { LuArrowDown } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import Pagination from "./Pagination";
import Blob from "./bolbs/Blob";
import BolbForLargest from "./svg/bolbForLargest";
import BolbForDevices from "./svg/bolbForDevices";

const WholeSalers = () => {
  return (
    <>
      <div className="text-black relative ml-8 w-[800px] my-20 grid grid-cols-[800px_500px] ">
        <div className="ml-[50px]">
        <h2 className="text-5xl mb-4 font-bold w-[600px] relative"> <span className="absolute top-[-104px] rotate-[-45deg] left-[-105px] w-[160px]"><BolbForLargest/></span>
          largets <span className="text-[rgb(56,143,203)]">WholeSalers</span>{" "}
          <span className="flex pt-4 ">
            {" "}
            of <div className="text-[rgb(56,143,203)] w-[500px] overflow-hidden h-[80px] left-[0]  top-[-5px] flex items-center justify-center  relative ">
                <ul className="flex flex-col items-start z-10 h-[200px] justify-center text gap-6 p-3 absolute top-[2px]  text-center w-[500px]  ">
                <span className="text-1">Mobile Phones</span>  
            <span className="text-2">Laptops</span>  
            <span className="text-3">Tablets</span> 
                </ul>
            <span className=" relative rotate-[-15deg] left-[-190px] top-[-46px] w-[580px]"><BolbForDevices/></span>
            
                </div> 
          </span>
        </h2>
        <p className="w-[440px] ">
          Supply that meets Demand. Get the best wholesale prices of used and
          refurbished Mobile Stocks
        </p>
        <a className="w-[400px] font-bold text-[rgb(104,153,189)] my-4 flex items-center gap-3 f ">
          Learn More{" "}
          <span className="block text-lg text-shadow ">
            {" "}
            <LuArrowRight strokeWidth="3" />
          </span>
        </a>

        <div className="flex justify-start gap-4 w-[600px] my-4">
          <div className="relative w-[240px] h-[50px] ">
            <input
              className="h-[100%] bg-white border-[1px] pl-10 border-green-400 w-[100%] rounded-full"
              placeholder="Email"
            />
            <span className="absolute opacity-[0.5] text-black text-xl top-[16px] left-4">
              <MdOutlineEmail />
            </span>
          </div>
          <button className="w-[140px] h-[50px] rounded-full flex text-[rgb(255,255,255)] robotoFont justify-center items-center gap-2  bg-[rgb(124,193,64)]  hover:bg-white border-2 border-[rgb(124,193,64)] cursor-default  hover:text-[rgb(124,193,64)] ">
            Subscribe{" "}
            <span>
              <LuArrowRight strokeWidth="3" />
            </span>
          </button>
          <button className="w-[140px] h-[50px] rounded-full flex text-[rgb(255,255,255)] justify-center robotoFont items-center gap-2 bg-[rgb(56,143,203)] hover:bg-white border-2 border-[rgb(56,143,203)] cursor-default hover:text-[rgb(56,143,203)]">
            <span>
              <LuArrowDown strokeWidth="3" />
            </span>
            Stock List
          </button>
        </div>

        <div className="flex justify-start mt-10 w-[500px] gap-6">
          <ul className="flex justify-center gap-3 ">
            <li className="flex items-center justify-center w-8 h-8 text-[16px] text-white bg-gray-300 rounded-full icon">
            <RiInstagramFill />
            </li>
            {/* <li className="w-3 h-3 bg-gray-300 rounded-full"></li> */}
            <li className="flex items-center justify-center w-8 h-8 text-[16px] text-white bg-gray-300 rounded-full icon">
              <FaFacebook />
            </li>
            <li className="flex items-center justify-center w-8 h-8 text-[16px] text-white bg-gray-300 rounded-full icon">
              <FaLinkedin />
            </li>
            <li className="flex items-center justify-center w-8 h-8 text-[16px] text-white bg-gray-300 rounded-full icon">
              <FaLinkedin />
            </li>
            <li className="flex items-center justify-center w-8 h-8 text-[19px] text-white bg-gray-300 rounded-full icon">
              <FaXTwitter />
            </li>
          </ul>
          <div className="flex items-center justify-center gap-2 ">
            <span className="text-xl text-[rgb(124,193,64)]">
              <FaUserFriends />
            </span>
            <p className="font-bold registered-color robotoFont">
              400k people <span>Registered</span>
            </p>
          </div>
        </div>
        </div> {/* End grid */}
        {/* BLOBS */}
        <div className="relative">
          <img className="absolute filter-image z-10 left-[43px] top-[-45px] w-[300px] h-[500px]" src="/public/pngimg.com - iphone_14_PNG13.png"/>
          <div className="absolute top-[-96px] right-[-106px]"><Blob isBigBolb={false}/></div>
          <div className="absolute top-[50px] right-[195px]"><Blob isBigBolb={true}/></div>
        
        
        <div className="rotate-[270deg] absolute right-[-20px] 2xl:right-[-120px] top-[200px] ml-96"><Pagination arrowState={false}/></div>
        </div>

      </div>
        <div className="w-[400px] mt-24 first-bar-color h-[10px] rounded-r-full"></div>
        <div className="w-[500px] mt-2 second-bar-color  bg-green-500 h-[10px] rounded-r-full"></div>
        
    </>
  );
};
export default WholeSalers;
