import { useState } from 'react';

import ToDoSection from './components/ToDoSection'

import tasks from './assets/data';
import logo  from "./assets/wildcodeschool.png";

import './App.css'

function App() {
  const [ filter, setFilter ] = useState("all");

  console.log(filter)
  return (
    <>
      <header className="header">
        <div>
          <img src={logo} alt="logo de la to do liste" className="logo" />
        </div>
        <nav className="nav">
          <button type="button" onClick={() => setFilter("all")}>Global</button>
          <button type="button" onClick={() => setFilter("maison")}>Maison</button>
          <button type="button" onClick={() => setFilter("sport")}>Sport</button>
          <button type="button" onClick={() => setFilter("code")}>Code</button>
        </nav>
      </header>
      <main>
        { (filter === "maison" || filter === "all") ? <ToDoSection title="Home" tasks={tasks}/> : null}
        { (filter === "sport" || filter === "all") ? <ToDoSection title="Sport" tasks={tasks}/> : null}
        { (filter === "code" || filter === "all") ? <ToDoSection title="Code" tasks={tasks}/> : null }
      </main>
    </>
  )
}

export default App
