import "./intro.scss";
import {init} from "ityped";
import { useEffect, useRef } from "react";


export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, 
        { showCursor: true,
          backDelay : 1500,
          strings: ['Developer', 'Computer Engineer' ] })
    },[]);

  return(
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="Me" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Atakan APAYDIN</h1>
          <h3>FullTime <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolyo">
          <img src="assets/down.png" alt="Down" />
        </a>
      </div>
    </div>
  )
}
