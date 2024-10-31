import React from "react";
import "./Blob.css";

function Blob(props) {

  const bolb1 = props.isBigBolb ? "big-blob": "blob"
  const bolb2 = props.isBigBolb ? "big-blob": "blob"
  return (
    <div className="blob-container">
      <div className={`${bolb1}  blob-1`}></div>
      <div className={`${bolb2} blob-2`}></div>
    </div>
  );
}

export default Blob;

  {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#FF0066"
          d="M60.9,0.2C60.9,31.8,30.4,63.6,0.1,63.6C-30.2,63.6,-60.5,31.8,-60.5,0.2C-60.5,-31.4,-30.2,-62.8,0.1,-62.8C30.4,-62.8,60.9,-31.4,60.9,0.2Z"
          transform="translate(100 100)"
        />
      </svg> */}