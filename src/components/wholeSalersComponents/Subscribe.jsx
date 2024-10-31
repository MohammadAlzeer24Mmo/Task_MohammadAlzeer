import { MdOutlineEmail } from "react-icons/md";
import { LuArrowRight } from "react-icons/lu";
import { LuArrowDown } from "react-icons/lu";

const Subscribe = () => {
    return(
        <>
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
        </>
    )
}
export default Subscribe;