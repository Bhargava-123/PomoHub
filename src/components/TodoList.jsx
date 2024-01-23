import React, { forwardRef, useContext,useRef,useState,useEffect } from 'react'
import "../assets/css/TodoList.scss"
import { PanelContext } from '../contexts/PanelContextProvider'
import checkBoxEmpty from "../assets/todo-list-logos/checkBoxEmpty.svg"
import checkBoxChecked from "../assets/todo-list-logos/checkBoxChecked.svg"
import todoOption from "../assets/todo-list-logos/todoOption.svg"
import ContextMenu from './ContextMenu'
import { TodolistContext } from '../contexts/TodolistContextProvider'


export const Todo = ({ handleCheckBox, taskName }) => {

    const initialContextMenu = {
        show: false,
        x: 250,
        y: 0,
    }
    
    const todoContainerRef = useRef(null);
    const [rect, setRect] = useState();
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        console.log(todoContainerRef.current.getBoundingClientRect());
        if (todoContainerRef.current) {
            const rect = todoContainerRef.current.getBoundingClientRect();
            setRect(rect);
        }
    }, [])
    const handleClickOutside = (e) => {
        if (!todoContainerRef.current.contains(e.target)) {
            console.log("CLICKED OUTSIDE");
            setContextMenu({ show: false });
        }
        else {
            console.log("CLICKED INSIDE");
        }
    }

    const [contextMenu, setContextMenu] = useState(initialContextMenu);

    const handleContextMenu = (e) => {
        console.log("SHOW CONTEXT MENU");
        const { pageX, pageY } = e;
        setContextMenu({show: true,x: rect.x+312, y: rect.y-120})
    }

    return (
        <div className="todo-container empty" ref = {todoContainerRef}>
            <div className="checkBox-container" onClick={() => handleCheckBox(todoContainerRef)}>
                <img src={checkBoxEmpty} alt="" className='checkBox' />
            </div>
            <div className="todo-task-name">
                {taskName}
            </div>
            <div className="todo-option-container">
                <img src={todoOption} className="todo-option" alt=""
                    onClick={(e) => handleContextMenu(e)}
                />
            </div>
            <ContextMenu show={contextMenu.show} x={contextMenu.x} y = {contextMenu.y}></ContextMenu>
        </div>
    )  
}



export default function TodoList() {

    const { collapse } = useContext(PanelContext);
    const{list,setList,todoTaskList} = useContext(TodolistContext)

    const handleCheckBox = (todoContainerRef) => {
        console.log(todoContainerRef.current); 
        console.log(todoContainerRef.current.children[0].children[0]);
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
                            ></Todo>
                        )
                    })
                }
            </div>
        )
}