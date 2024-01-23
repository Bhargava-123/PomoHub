import React, { useEffect,useState } from 'react'
import "./App.scss"
import { PanelContextProvider } from './contexts/PanelContextProvider'
import { SidePanel } from './components/SidePanel'
import { PomodoroTimer } from './components/PomodoroTimer'
import TimerContextProvider from './contexts/TimerContextProvider'
import RightPanel from './components/RightPanel'
import ProgressBar from './components/ProgressBar'
import {TodolistContextProvider} from './contexts/TodolistContextProvider'


export default function App() {
  return (
    <div className="App">
      <PanelContextProvider>
        <TodolistContextProvider>
          <SidePanel></SidePanel>
        </TodolistContextProvider>
      </PanelContextProvider>
      <TimerContextProvider>
        <PomodoroTimer></PomodoroTimer>
        <RightPanel></RightPanel>
        <ProgressBar></ProgressBar>
      </TimerContextProvider>
      
      
    </div>

  )
}
