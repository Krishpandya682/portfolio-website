import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Education from "./components/education/Education"
import Skills from "./components/skills/Skills"
import Projects from "./components/personal_projects/Personal_projects"
import WorkExperience from "./components/work_experience/Work_experience"
import Extracurricular from "./components/extracurricular/Extracurricular"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import "./app.scss"
import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
    
        <Intro />
        <Education />
        <Skills />
        <Projects />
        <WorkExperience />
        <Extracurricular />
        <Contact />
      </div>
    </div>
  );
}

export default App;
