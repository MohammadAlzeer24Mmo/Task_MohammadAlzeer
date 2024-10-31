import Blob from "./bolbs/Blob";
import Navbar from "./navbar";
import Pagination from "./Pagination";
import SlideShow from "./SlideShow";
import Trends from "./trends/Trends";
import WholeSalers from "./WholeSalers";
import HugeBolb from "./bolbs/HugeBolb";

const Body = () => {
  return (
    <>
      <div className=" relative  overflow-hidden border-t-[15px] mt-[45px] border-[rgb(158,204,234)] rounded-tl-[25px] rounded-tr-[25px] bg-white">
       <HugeBolb/>
       {/* <div className="bg-[rgb(255,255,255,0.1)]"> */}
        <Navbar />
    

        <WholeSalers/>

        <SlideShow/>

       {/* </div> */}

        <Trends />

        <Pagination arrowState={true}/>

      </div>
    </>
  );
};

export default Body;
