import BolbForMobile from "../svg/BlobForMobile";
import ListOfDevices from "./ListOfDevices";

const Trends = () => {
  return (
    <>
      <div className="relative mt-32">
        <h2 className="mb-12 text-5xl font-bold text-center text-black">
          <span className="relative">
            <span className=" absolute mobile-gradient rotate-[93deg]  left-[22px] top-[-65px] ">
              <BolbForMobile />
            </span>
            <span className="relative text-white">Moblie</span>
            
          </span>{" "}
          <span className="text-[rgb(56,143,203)]">Stock</span>
        </h2>
        <p className="text-black text-center text-xl font-semibold opacity-[0.8] w-[60%] m-auto mb-12">
          We stay upto date with latest technology trends and offer innovative
          solutions. that help you stay ahead in competetion
        </p>
      </div>
      <ListOfDevices />
    </>
  );
};

export default Trends;
