import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolist from './tasks'
import Clock from './clock'
function App() {

  return (
    <>
    <Clock/>
  <Todolist />
    </>
  )
}

export default App
