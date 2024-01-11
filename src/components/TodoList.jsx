import React, { forwardRef, useContext,useRef } from 'react'
import "../assets/css/TodoList.scss"
import { PanelContext } from '../contexts/PanelContextProvider'
import checkBoxEmpty from "../assets/todo-list-logos/checkBoxEmpty.svg"
import checkBoxChecked from "../assets/todo-list-logos/checkBoxChecked.svg"
import todoOption from "../assets/todo-list-logos/todoOption.svg"

export const Todo = ({ handleCheckBox, taskName}) => {
    
    const todoContainerRef = useRef();
    const contextMenuRef = useRef();

    
    const handleOption = (e) => {
        let x = e.clientX;
        let y = e.clientY + 100;
        let contextMenuClassName = "context-menu-container"
        console.log(e.clientX,e.clientY);
        if (contextMenuRef.current.className.includes("hide")) {
            contextMenuRef.current.className = contextMenuClassName+" popup";
            contextMenuRef.current.style.left = `${x}}px`;
            contextMenuRef.current.style.right = `${y}px`;
        }
        else {
           contextMenuRef.current.className = contextMenuClassName+" hide"
        }
        
    }

    return (
        <div className="todo-container empty" ref = {todoContainerRef}>
            <div className="checkBox-container" onClick={() => handleCheckBox(todoContainerRef)}>
                <img src={checkBoxEmpty} alt="" className='checkBox' />
            </div>
            <div className="todo-task-name">
                {taskName}
            </div>
            <div className="todo-option-container" onClick={(e) => handleOption(e)}>
                <img src={todoOption} className = "todo-option" alt="" />
            </div>
            

            <div className="context-menu-container hide" ref = {contextMenuRef}>
                <h6>Delete</h6>
                <h6>Edit</h6>
            </div>
        </div>
    )  
}



export default function TodoList() {

    const { collapse } = useContext(PanelContext);

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

    const todoTaskList = [
        {
            taskName: "Study Compiler Design asldkfj",
            isCompleted: false,

        },
        {
            taskName: "Study Crypto",
            isCompleted: true,
        },
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