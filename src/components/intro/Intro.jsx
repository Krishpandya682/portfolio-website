import React  from 'react';
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
                    <img src="https://firebasestorage.googleapis.com/v0/b/krishpandyaportfolio.appspot.com/o/assets%2Fkrish.webp?alt=media" alt="Display Pic" loading="lazy" />
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
                <a href="#education"><img src="https://firebasestorage.googleapis.com/v0/b/krishpandyaportfolio.appspot.com/o/assets%2Fdown.webp?alt=media" alt="" loading="lazy"/></a>
            </div>
        </div>
    )
}
