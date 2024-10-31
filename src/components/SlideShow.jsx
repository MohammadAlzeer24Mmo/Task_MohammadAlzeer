import devices from "./Data/devices-for-slide-show"
const SlideShow = () => {

    return(
        <>
        <div className="flex items-center justify-center gap-8 my-12 overflow-hidden">
{devices.map((device)=>(
    // <div className="w-20 h-20 slide-animation ">
    <img className="w-16 h-16 slide-animation" src={device.url}/>
    // </div>
))}
</div>
        </>
    )
}

export default SlideShow