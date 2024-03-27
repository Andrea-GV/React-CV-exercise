import { useState } from "react";
import './App.css';
import Hero from './components/hero/Hero';
import {CV} from './CV/CV';
import About from "./components/about/About";
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import More from './components/more/More';

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  // Esta constante es la que va a hacer que cambie el estado, y funcionen los botones
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
        <Hero hero={hero}></Hero>
        <About hero={hero}></About>
      
        <button className="custom-btn btn-4" onClick={
          () => setShowEducation(true)}>
          Education
        </button>
        <button className="custom-btn btn-4" onClick={
          () => setShowEducation(false)}>
          Experience
        </button>
      
        {/*       CANCELO ESTAS DOS SECCIONES PARA QUE SE VUELVAN DINÁMICAS CON LOS BOTONES
        <Education education={education}></Education>
        <Experience experience={experience}></Experience>                 */}
      
        <div>
          {showEducation ? (
            <Education education={education} />
          ) : (
            <Experience experience={experience} />
          )}
        </div>
	      <More
          languages={languages}
          habilities={habilities}
          volunteer={volunteer}>
        </More>
    </div>
  )
}

export default App
