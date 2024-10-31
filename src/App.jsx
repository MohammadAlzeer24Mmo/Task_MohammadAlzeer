import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import HugeBolb from "./components/blobs/HugeBlob";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <About />
      {/* <HugeBolb/> */}
      <Body />
    </>
  );
}

export default App;
