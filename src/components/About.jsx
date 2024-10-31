import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";

const About = () => {
    return(
        <>
        <nav className="bg-[rgb(56,143,203)] text-white font-thin z-[0] text-sm absolute w-[100%] h-[74px]  gap-[30%] items-start flex justify-around">
            {/* left */}
            <div className="flex font-bold  mt-3 justify-start  gap-8 w-[380px]">

                <div className="flex items-center justify-between  gap-1 w-[100px]">
                    <span className=""><HiOutlineMail/></span>
                    <p>info@abc.com</p>
                </div>
                <div className="flex items-center center gap-2 w-[128px]">
                    <span><LuPhone /></span>
                    <p>+123 456789</p>
                </div>
            </div>
            {/* right */}
            <div className="flex justify-between h-12 gap-4 text-xs font-semibold">
                <div className="my-auto ">
                    <p className="">Privacy Policy</p>
                </div>
                <div className="w-[1px] h-[70%] mt-[5px] bg-white"></div> {/*line*/}
                <div className="my-auto ">
                    <p className="">Terms and Conditions</p>
                </div>
            </div>
        </nav>
        </>
    )
}

export default About;