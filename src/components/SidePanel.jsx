import { useContext,useRef, useState } from "react"
import "../assets/css/SidePanel.scss"
import { PanelContext } from "../contexts/PanelContextProvider";
import analyticsIcon from "../assets/analytics.svg"
import timer from "../assets/timer.svg"
import todoList from "../assets/todoList.svg"
import settings from "../assets/settings.svg"
import arrowExpand from "../assets/todo-list-logos/arrowExpand.svg"
import addIcon from "../assets/plus.svg"


import { PanelHeader } from '../components/PanelHeader'
import { CollapsedPanelHeader } from '../components/CollapsedPanelHeader'
import TodoList from "./TodoList";

export const SidePanel = () => {
    const panelRef = useRef();
    const collapseButtonRef = useRef();
    const arrowIconRef = useRef();
    const [showTodo,setShowTodo] = useState(false); //new state

    const { collapse, handleCollapse, handleTodoList } = useContext(PanelContext);

    const handleTodoExpand = () => {
        if (arrowIconRef.current.className.includes("expanded")) {
            arrowIconRef.current.style.transform = "rotate(90deg)";
            arrowIconRef.current.className = "arrow-icon";
            setShowTodo(!showTodo);
        }
        else {
            arrowIconRef.current.style.transform = "rotate(0deg)"
            arrowIconRef.current.className = "arrow-icon expanded";
            setShowTodo(!showTodo);
            
        }
        
    }
    return (
        <>
            <div className={`panel-container ${!collapse ? "collapse" : ""}`} ref={panelRef}>
                <PanelHeader></PanelHeader>
                <CollapsedPanelHeader></CollapsedPanelHeader>

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
                        <li className="menu-item" onClick={handleTodoList}>
                            <img src={todoList} className='menu-icon' alt="" />
                            <p>To-Do List</p>
                            <div className="arrow-icon-container" onClick={handleTodoExpand}>
                                <img src={arrowExpand} ref={ arrowIconRef } className="arrow-icon" alt=""/>
                            </div>
                        </li>
                        {showTodo ? <TodoList></TodoList>:""}
                    </ul>

                </div>
                <img src={addIcon} alt="" className="add-icon"/>
                <div className="panel-footer">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <img src={settings} className='menu-icon' alt="" />
                            <p>Setting</p>
                        </li>
                    </ul>

                </div>
            </div>
            <div className='width-adjuster' ref={collapseButtonRef}>
                <div className='width-line' onClick={handleCollapse}>
                </div>
            </div>
        </>

    )
}