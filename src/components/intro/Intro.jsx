import React, { Component }  from 'react';
import "./intro.scss"
import Typewriter from 'typewriter-effect'
// import { useEffect, useRef } from "react"

export default function Intro(props) {

    // const textRef = useRef();
    // useEffect(() => {
    //           init(textRef.current, { showCursor: false, strings: ['Use with React.js!', 'Yeah!' ] })     
    // }, [])

    return (
        <div className='intro' id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="./assets/krish.png" alt="Display Pic" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There I'm</h2>
                    <h1>Krish Pandya</h1>
                    {/* <h3><span ref={textRef}></span></h3> */}
                    <h3>  <Typewriter

                        options={{
                            strings: ["Software Engineer", "Algorithms TA", "Recent UMD Computer Science Grad"],
                            autoStart: true,
                            delay: 50,
                            loop: true
                        }}

                    />
                    </h3>
                </div>
                <a href="#education"><img src="assets/down.png" alt="" /></a>
            </div>
        </div>
    )
}
