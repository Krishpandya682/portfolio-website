import "./topbar.scss"
import React, { Component }  from 'react';
import {Person, Mail, LocationOn} from "@material-ui/icons" 
export default function Topbar({menuOpen, setMenuOpen}) {
    

    return (
        <div className={'topbar ' + (menuOpen && ' active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">KP</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>
                            +1 301 219 9869 
                        </span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>
                            krishjpandya@gmail.com
                        </span>
                    </div>

                    <div className="itemContainer">
                        <LocationOn/>
                        <span>
                            College Park, MD
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
