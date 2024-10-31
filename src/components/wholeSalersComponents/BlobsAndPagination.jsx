import Blob from "../bolbs/Blob"
import Pagination from "../Pagination"

const BlobsAndPagination = () => {
    return(
        <>
                <div className="relative">
          <img className="absolute filter-image z-10 left-[43px] top-[-45px] w-[300px] h-[500px]" src="/public/pngimg.com - iphone_14_PNG13.png"/>
          <div className="absolute top-[-96px] right-[-106px]"><Blob isBigBolb={false}/></div>
          <div className="absolute top-[50px] right-[195px]"><Blob isBigBolb={true}/></div>
        
        
        <div className="rotate-[270deg] absolute right-[-20px] 2xl:right-[-120px] top-[200px] ml-96"><Pagination arrowState={false}/></div>
        </div>
        </>
    )
}

export default BlobsAndPagination