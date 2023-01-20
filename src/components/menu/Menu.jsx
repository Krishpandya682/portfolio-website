import "./menu.scss"
import React, { Component }  from 'react';
export default function Menu({menuOpen, setMenuOpen}) {
    

    return (
        <div className={'menu ' + (menuOpen && ' active')}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#education">Education</a>
                </li>
                
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#personal_projects">Personal Projects</a>
                </li>
                
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#academic_projects">Academic Projects</a>
                </li>
                
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#work_experience">Work Experience</a>
                </li>
                
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#extracurricular">Extracurricular </a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
