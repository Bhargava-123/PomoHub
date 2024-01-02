import React, { useEffect, useRef,useState } from 'react'
import "../assets/css/RightPanel.scss"

export default function RightPanel() {

    const [collapse, setCollapse] = useState(true);
    const rightPanelRef = useRef();

    const handleCollapse = () => {
        collapse == true ? setCollapse(false) : setCollapse(true);
    }

    return (
        <div className='right-panel-container' >

            <div className="width-control-container">
                <div className="width-control" onClick={() => handleCollapse()}>

                </div>

            </div>

            <div className={`right-panel-button-container
             ${collapse ? "right-collapse" : ""} `} ref={rightPanelRef}>
                <div className="mode-container work">
                    <h5>Work Mode</h5>
                </div>
                <div className="mode-container short-break">
                    <h5>Short Break</h5>
                </div>
                <div className="mode-container long-break">
                    <h5>Long Break</h5>
                </div>
            </div>
      </div>
      
  )
}
