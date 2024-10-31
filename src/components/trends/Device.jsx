const Device = (props) => {
    return(
        <>
        <div className="relative rounded-dual-border">
        <div className="flex flex-col p-6 justify-between rounded-dual-border-inner text-black w-[300px] h-[220px]  items-center ">
            <img className="w-[130px]" src={props.url} alt="Device alt"></img>
            <h2 className="text-2xl font-bold opacity-[0.6]">{props.name}</h2>
            <p className="text-xs font-sans opacity-[0.6]">{props.description}</p>
        </div>
        </div>
        </>
    )
}
export default Device