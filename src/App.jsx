import React, { useState } from 'react'
import './App.css'
import darkBackground from './assets/images/bg-desktop-dark.jpg'
import lightBackground from './assets/images/bg-desktop-light.jpg'

import ModeToggle from './components/ModeToggle'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [mode, setMode] = useState({isDark: true})
  document.body.style.backgroundColor = mode? "hsl(235, 21%, 11%)":  "white";
  


  return (
    <>
      <img className='background' src={mode? darkBackground: lightBackground} alt="Background image" />

      

      <div className='switch-flex'>
        
        <h1>TODO</h1>
        <ModeToggle theme={mode} set={setMode}/>
      
      </div>
      <TodoForm mode={mode}/>

      <TodoList mode={mode}/>
      
    </>
  )
}

export default App
