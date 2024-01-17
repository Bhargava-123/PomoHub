import React, { forwardRef, useContext,useRef,useState,useEffect } from 'react'
import "../assets/css/TodoList.scss"
import { PanelContext } from '../contexts/PanelContextProvider'
import checkBoxEmpty from "../assets/todo-list-logos/checkBoxEmpty.svg"
import checkBoxChecked from "../assets/todo-list-logos/checkBoxChecked.svg"
import todoOption from "../assets/todo-list-logos/todoOption.svg"
import ContextMenu from './ContextMenu'


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

    const todoTaskList = [
        {
            taskName: "Study Compiler Design asldkfj",
            isCompleted: false,

        },
        {
            taskName: "Study Crypto",
            isCompleted: true,
        },
        {
            taskName: "STudy DSA",
            isCompleted: false,
        }
    ]

        return (
            <div className={`todo-list-container ${!collapse ? "collapse" : ""}`}>
                {
                    todoTaskList.map((value, key) => {
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