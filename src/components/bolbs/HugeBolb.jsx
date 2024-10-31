import "./hugeBolb.css";
import SvgBulb from "./SvgBulb";
const HugeBolb = () => {
    return(
        <>
        <div className="huge-bolb-container">
            <div className=" huge-bolb huge-bolb-1"><SvgBulb color={"rgb(197,204,233,0.8)"}/></div>
            <div className="huge-bolb huge-bolb-2"><SvgBulb color={"rgb(221,240,235,1)"}/></div>
    </div>
        </>
    )
}

export default HugeBolb;