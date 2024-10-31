import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Pagination = (props) => {

    const paginationBarStyle = props.arrowState ? "bg-[rgb(124,193,64)]" : "pagination-bar-gradient"
    const paginationPosition = props.arrowState ? "" : ""
  return (
    <>
      <div className={`flex items-center  ${paginationPosition} justify-center gap-4 mt-8 mb-8`}>
        {props.arrowState && (
          <span className="p-[6px]  text-[rgb(124,193,64)] border-2 border-[rgb(124,193,64)] rounded-full">
            <IoIosArrowBack />
          </span>
        )}
        <ul className="flex justify-center gap-3 ">
          <li className={`w-10 h-3 ${paginationBarStyle} rounded-full`}></li>
          {/* <li className="w-3 h-3 bg-gray-300 rounded-full"></li> */}
          <li className="w-3 h-3 bg-[rgb(190,217,246)] rounded-full"></li>
          <li className="w-3 h-3 bg-[rgb(190,217,246)] rounded-full"></li>
          <li className="w-3 h-3 bg-[rgb(190,217,246)] rounded-full"></li>
        </ul>
        {props.arrowState && (
          <span className="p-[6px]  text-[rgb(124,193,64)] border-2 border-[rgb(124,193,64)] rounded-full">
            <IoIosArrowForward />
          </span>
        )}
      </div>
    </>
  );
};
export default Pagination;
