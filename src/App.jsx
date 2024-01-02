import React, { useEffect,useState } from 'react'
import "./App.scss"
import { PanelContextProvider } from './contexts/PanelContextProvider'
import { SidePanel } from './components/SidePanel'
import PomodoroTimer from './components/PomodoroTimer'

export default function App() {
  return (
    <div className="App">
      <PanelContextProvider>
        <SidePanel></SidePanel>
      </PanelContextProvider>
      <PomodoroTimer></PomodoroTimer>
    </div>

  )
}
