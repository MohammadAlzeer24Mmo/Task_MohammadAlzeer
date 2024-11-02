import { LuArrowRight } from "react-icons/lu";
import Socials from "./wholeSalersComponents/Socials";
import BlobsAndPagination from "./wholeSalersComponents/BlobsAndPagination";
import HeadLine from "./wholeSalersComponents/Headline";
import Subscribe from "./wholeSalersComponents/Subscribe";

const WholeSalers = () => {
  return (
    <>
      <div className="text-black relative ml-8 w-[800px] my-20 grid grid-cols-[800px_500px] ">
        <div className="ml-[50px]">
          <HeadLine />
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

          <Subscribe />

          <Socials />
        </div>{" "}
        {/* End grid */}
        <BlobsAndPagination />
      </div>
      <div className="w-[400px] mt-24 first-bar-color h-[10px] rounded-r-full"></div>
      <div className="w-[500px] mt-2 second-bar-color  bg-green-500 h-[10px] rounded-r-full"></div>
    </>
  );
};
export default WholeSalers;
