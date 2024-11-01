import WifiSignal from "./helpers/WifiSignal"

const Navbar = () => {
    return(
        <>
        <nav className="relative mt-8">
            <ul className="flex robotoFont gap-[40px] text-[rgb(0,0,0,0.9)] font-mono font text-xl justify-center items-center">
                <li className="relative">Home
                <span className="absolute border-style rounded-full bottom-[-5px] w-[58px] left-[-3px] h-1 "></span>
                </li>
                <li>About Us</li>
                <li>Wholesale</li>
                <li className="relative ml-6 mr-6 ">
                    <ul className="flex font-sans text-4xl font-bold">
                    <li>l</li>
                    <li className="relative z-10">o</li>
                    <li className="relative z-10">g</li>
                    <li className="relative z-10">o</li>
                    <span className="absolute top-[20px] left-[14px] z-0 w-3 h-3 bg-[rgb(17,238,252)] rounded-full"></span>
                    <span className="absolute top-[20px] left-[37px] z-0 w-3 h-3 bg-[rgb(224,57,154)] rounded-full"></span>
                    <span className="absolute top-[20px] left-[60px] z-0 w-3 h-3 bg-[rgb(255,212,61)] rounded-full"></span>
                    </ul><span className="absolute top-[-10px] rotate-45 right-[-23px]"><WifiSignal/></span></li>
                <li>Service</li>
                <li>News</li>
                <li>How it Works</li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar