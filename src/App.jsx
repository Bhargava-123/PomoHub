import React, { useEffect,useState } from 'react'
import "./App.scss"
import { PanelContextProvider } from './contexts/PanelContextProvider'
import { SidePanel } from './components/SidePanel'

export default function App() {
  return (
    <div className="App">
      <PanelContextProvider>
        <SidePanel></SidePanel>
      </PanelContextProvider>
      <div>
        TIME GOES HERE
      </div>

    </div>

  )
}
