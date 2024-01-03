import { useContext,useRef } from "react"
import { PanelContext } from "../contexts/PanelContextProvider";
import analyticsIcon from "../assets/analytics.svg"
import timer from "../assets/timer.svg"
import todoList from "../assets/todoList.svg"
import settings from "../assets/settings.svg"
import { PanelHeader } from '../components/PanelHeader'
import { CollapsedPanelHeader } from '../components/CollapsedPanelHeader'
import TodoList from "./TodoList";

export const SidePanel = () => {
    const panelRef = useRef();
    const collapseButtonRef = useRef();

    const { collapse, handleCollapse, handleTodoList } = useContext(PanelContext);
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
                        </li>
                        <TodoList></TodoList>
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
            <div className='width-adjuster' ref={collapseButtonRef}>
                <div className='width-line' onClick={handleCollapse}>
                </div>
            </div>
        </>

    )
}