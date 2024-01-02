import React, { useEffect,useState } from 'react'
import "./App.scss"
import { PanelContextProvider } from './contexts/PanelContextProvider'
import { SidePanel } from './components/SidePanel'
import PomodoroTimer from './components/PomodoroTimer'
import TimerContextProvider from './contexts/TimerContextProvider'
import RightPanel from './components/RightPanel'

export default function App() {
  return (
    <div className="App">
      <PanelContextProvider>
        <SidePanel></SidePanel>
      </PanelContextProvider>
      <TimerContextProvider>
        <PomodoroTimer></PomodoroTimer>
        <RightPanel></RightPanel>
      </TimerContextProvider>
      
    </div>

  )
}
