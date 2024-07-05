import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Education from "./components/education/Education"
import Skills from "./components/skills/Skills"
import PersonalProjects from "./components/personal_projects/Personal_projects"
import WorkExperience from "./components/work_experience/Work_experience"
import Extracurricular from "./components/extracurricular/Extracurricular"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import "./app.scss"
import React, { Component }  from 'react';
import { useState } from "react"
import { AnimatePresence, } from "framer-motion"
import Chatbot from "./components/chatbot/Chatbot"
import Certificates from "./components/Certificates/certifications"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <AnimatePresence>
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Chatbot></Chatbot>
      <div className="sections">

        <Intro />
        <Education />
        <WorkExperience />
        <PersonalProjects />
        <Skills />
        {/* <Extracurricular /> */}
        {/* <Contact /> */}
        <Certificates/>
      </div>
    </div>
    </AnimatePresence>
  );
}

export default App;
