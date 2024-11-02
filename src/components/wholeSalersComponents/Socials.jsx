import { FaUserFriends } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
const Socials = () => {
    return(
        <>
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
        </>
    )
}

export default Socials