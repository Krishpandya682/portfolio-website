import "./topbar.scss"
import React, { Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
export default function Topbar({menuOpen, setMenuOpen}) {
    

    return (
        <div className={'topbar ' + (menuOpen && ' active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">KP</a>
                    <div className="itemContainer">
                        <FontAwesomeIcon icon={faUser} className="icon"/>
                        <span>
                            +1 301 219 9869 
                        </span>
                    </div>
                    <div className="itemContainer">
                        <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                        <span>
                            krishjpandya@gmail.com
                        </span>
                    </div>

                    <div className="itemContainer">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon"/>
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
