import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getApps } from './Utils/helper'

function App() {
  const CurrentApp = getApps();
  return (
    <>

      <Router>
        <CurrentApp />
      </Router>

    </>
  )
}

export default App
