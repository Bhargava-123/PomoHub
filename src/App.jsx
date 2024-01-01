import React, { useEffect,useState } from 'react'
import "./App.css"
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
  return (<div className="panel-header">
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
    if (collapse === false) {
      panelRef.current.style.width = "20rem"
      setMenuItemClassName("menu-item");
    }
    else {
      panelRef.current.style.width = "80px"
      setMenuItemClassName("menu-item collapse");
    }
    
    
  }

  return (
    <div className="App">
      <div className="panel-container" ref = {panelRef}>
        {!collapse ? <CollapsedPanelHeader></CollapsedPanelHeader> : <PanelHeader></PanelHeader>}
        <div className="panel-content">
          <ul className='menu-list'>
            <li className={menuItemClassName}>
              <img src={analyticsIcon} className='menu-icon' alt="" />
              <p>Analytics</p>
            </li>
            <li className={menuItemClassName}>
              <img src={timer} className='menu-icon' alt="" />
              <p>Timer</p>
            </li>
            <li className={menuItemClassName}>
              <img src={todoList} className='menu-icon' alt="" />
              <p>To-Do List</p>
            </li>
          </ul>

        </div>
        <div className="panel-footer">
          <ul className="menu-list">
            <li className={menuItemClassName}>
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
