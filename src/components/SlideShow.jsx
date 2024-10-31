import devices from "./Data/devices-for-slide-show"
const SlideShow = () => {

    return(
        <>
        <div className="flex items-center justify-center gap-8 my-12 overflow-hidden">
{devices.map((device)=>(
    
    <img key={device.id} className="w-16 h-16 slide-animation" src={device.url} alt={device.alt}/>
))}
</div>
        </>
    )
}

export default SlideShow