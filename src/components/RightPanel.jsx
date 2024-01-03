import React, { useContext, useEffect, useRef,useState } from 'react'
import "../assets/css/RightPanel.scss"
import { TimerContext } from '../contexts/TimerContextProvider';
export default function RightPanel() {

    const [collapse, setCollapse] = useState(true);
    const { setTimerMode } = useContext(TimerContext);
    const rightPanelRef = useRef();
    const handleCollapse = () => {
        collapse == true ? setCollapse(false) : setCollapse(true);
    }

    const handleTimerMode = (mode) => {
        console.log(mode);
        setTimerMode(mode);
    }

    return (
        <div className='right-panel-container' >

            <div className="width-control-container">
                <div className="width-control" onClick={() => handleCollapse()}>
                </div>
            </div>

            <div className={`right-panel-button-container
             ${collapse ? "right-collapse" : ""} `} ref={rightPanelRef}>
                <div className="mode-container work" onClick={() => handleTimerMode("work-mode")}>
                    <h5>Work Mode</h5>
                </div>
                <div className="mode-container short-break" onClick={() => handleTimerMode("short-break")}>
                    <h5>Short Break</h5>
                </div>
                <div className="mode-container long-break" onClick={() => handleTimerMode("long-break")}>
                    <h5>Long Break</h5>
                </div>
            </div>
      </div>
      
  )
}
