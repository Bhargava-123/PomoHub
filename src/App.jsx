import React, { useEffect,useState } from 'react'
import "./App.scss"
import analyticsIcon from "./assets/analytics.svg"
import timer from "./assets/timer.svg"
import todoList from "./assets/todoList.svg"
import settings from "./assets/settings.svg"
import { useRef } from 'react'


export const PanelHeader = () => {
  return (
    <div className="panel-header">
      <p id="Pomo">
        P
      </p>
      <img src={timer} className="timer-icon-header" alt="" />
      <p>
        mo
      </p>
      <p id="Hub">
        Hub
      </p>
    </div> 
  )
}

export const CollapsedPanelHeader = () => {
  return (<div className="panel-header collapse">
    <img src={timer} className="timer-icon-header" alt="" />
    <p id="Hub">
      H
    </p>
  </div>
  )
 }
export default function App() {
  const panelRef = useRef();
  const collapseButtonRef = useRef();

  const [collapse, setCollapse] = useState(false);
  const [panelWidth, setPanelWidth] = useState();

  const [menuItemClassName, setMenuItemClassName] = useState("menu-item");

  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    <div className="App">
      <div className={`panel-container ${!collapse ? "collapse" : ""}`} ref = {panelRef}>
        <CollapsedPanelHeader></CollapsedPanelHeader>
        <PanelHeader></PanelHeader>
        <div className="panel-content">
          <ul className='menu-list'>
            <li className="menu-item">
              <img src={analyticsIcon} className='menu-icon' alt="" />
              <p>Analytics</p>
            </li>
            <li className="menu-item">
              <img src={timer} className='menu-icon' alt="" />
              <p>Timer</p>
            </li>
            <li className="menu-item">
              <img src={todoList} className='menu-icon' alt="" />
              <p>To-Do List</p>
            </li>
          </ul>

        </div>
        <div className="panel-footer">
          <ul className="menu-list">
            <li className="menu-item">
              <img src={settings} className='menu-icon' alt="" />
              <p>Setting</p>
            </li>
          </ul>
          
        </div>
      
      
      </div>
      <div className='width-adjuster' ref = {collapseButtonRef}>
        <div className='width-line' onClick={handleCollapse}>
        </div>
      </div>
    </div>
  )
}
