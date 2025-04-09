import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolist from './tasks'
import Clock from './clock'
import StropWatch from './Stopwatch'
function App() {

  return (
    <>
    <Clock/>
    {/* <StropWatch /> */}
    <StropWatch  />
    <Todolist/>
    </>
  )
}

export default App
