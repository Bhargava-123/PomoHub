import React, { forwardRef, useContext,useRef,useState,useEffect } from 'react'
import "../assets/css/TodoList.scss"
import { PanelContext } from '../contexts/PanelContextProvider'
import checkBoxEmpty from "../assets/todo-list-logos/checkBoxEmpty.svg"
import checkBoxChecked from "../assets/todo-list-logos/checkBoxChecked.svg"
import todoOption from "../assets/todo-list-logos/todoOption.svg"
import ContextMenu from './ContextMenu'
import doneIcon from "../assets/todo-list-logos/done.svg"
import { TodolistContext } from '../contexts/TodolistContextProvider'


export const Todo = ({ handleCheckBox, taskName, taskId, doEdit }) => {

    const initialContextMenu = {
        show: false,
        x: 250,
        y: 0,
    }
    
    const todoContainerRef = useRef(null);
    const [rect, setRect] = useState();
    const{setTask,change} = useContext(TodolistContext)
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        if (todoContainerRef.current) {
            const rect = todoContainerRef.current.getBoundingClientRect();
            setRect(rect);
        }
    }, [])
    const handleClickOutside = (e) => {
        if (!todoContainerRef.current.contains(e.target)) {
            setContextMenu({ show: false });
        }
    }

    const [contextMenu, setContextMenu] = useState(initialContextMenu);

    const handleContextMenu = (e) => {

        const { pageX, pageY } = e;
        setContextMenu({show: true,x: rect.x+312, y: rect.y-120})
    }

    return (
        <div className="todo-container empty" ref = {todoContainerRef}>
            <div className="checkBox-container" onClick={() => handleCheckBox(todoContainerRef)}>
                <img src={checkBoxEmpty} alt="" className='checkBox' />
            </div>
            <div className="todo-task-name">
                {doEdit ? <div><input className='edit-text-box' onChange={(events)=>setTask(events.target.value)}/> <img src={doneIcon} className='done-icon' onClick={() => change(taskId)}/></div>: taskName}
            </div>
            <div className="todo-option-container">
                <img src={todoOption} className="todo-option" alt=""
                    onClick={(e) => handleContextMenu(e)}
                />
            </div>
            <ContextMenu show={contextMenu.show} x={contextMenu.x} y = {contextMenu.y} taskId={taskId}></ContextMenu>
        </div>
    )  
}



export default function TodoList() {

    const { collapse } = useContext(PanelContext);
    const{list} = useContext(TodolistContext);

    const handleCheckBox = (todoContainerRef) => {
        const checkBoxEle = todoContainerRef.current.children[0].children[0]
        if (todoContainerRef.current.className.includes("empty")) {
            checkBoxEle.src = checkBoxChecked
            todoContainerRef.current.className = "todo-container checked";
        }
        else{
            checkBoxEle.src = checkBoxEmpty
            todoContainerRef.current.className = "todo-container empty"
        }
    }


        return (
            <div className={`todo-list-container ${!collapse ? "collapse" : ""}`}>
                {
                    list.map((value, key) => {
                        return (
                            <Todo key = {key}
                                taskName={value.taskName}
                                handleCheckBox={handleCheckBox}
                                taskId={value.id}
                                doEdit={value.edit}
                            ></Todo>
                        )
                    })
                }
            </div>
        )
}