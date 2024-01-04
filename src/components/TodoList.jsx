import React, { useContext,useRef } from 'react'
import "../assets/css/TodoList.scss"
import { PanelContext } from '../contexts/PanelContextProvider'
import checkBoxEmpty from "../assets/todo-list-logos/checkBoxEmpty.svg"
import checkBoxChecked from "../assets/todo-list-logos/checkBoxChecked.svg"
export default function TodoList() {

    const { collapse } = useContext(PanelContext);
    const checkBoxContainerRef = useRef();

    const handleCheckBox = () => {
        const checkBoxEle = checkBoxContainerRef.current.children[0]
        if (checkBoxContainerRef.current.className.includes("empty")) {
            checkBoxEle.src = checkBoxChecked
            checkBoxContainerRef.current.className = "checkBox-container checked";
        }
        else{
            checkBoxEle.src = checkBoxEmpty
            checkBoxContainerRef.current.className = "checkBox-container empty"
        }
    }

        return (
            <div
                className={`todo-list-container ${!collapse ? "collapse" : ""}`}>
                <div className="todo-container" >
                    <div className="checkBox-container empty" ref={checkBoxContainerRef} onClick={handleCheckBox}>
                        <img src={checkBoxEmpty} alt="" className='checkBox' />
                    </div>
                    <div className="todo-task-name">
                        study vcc
                    </div>
                </div>
                <div className="todo-container">
                    <div className="checkBox-container">
                        <img src={checkBoxEmpty} alt="" className='checkBox' />
                    </div>
                    <div className="todo-task-name">
                        study css
                    </div>
                </div>
      
            </div>
        )
}