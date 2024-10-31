import BolbForDevices from "../svg/bolbForDevices";
import BolbForLargest from "../svg/bolbForLargest";

const HeadLine = () => {
    return(
        <>
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
        </>
    )
}
export default HeadLine;