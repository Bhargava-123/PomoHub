import React, { forwardRef, useContext,useRef } from 'react'
import "../assets/css/TodoList.scss"
import { PanelContext } from '../contexts/PanelContextProvider'
import checkBoxEmpty from "../assets/todo-list-logos/checkBoxEmpty.svg"
import checkBoxChecked from "../assets/todo-list-logos/checkBoxChecked.svg"


export const Todo = ({ handleCheckBox, taskName }) => {
    
    const todoContainerRef = useRef();

    return (
        <div className="todo-container empty" ref = {todoContainerRef}>
            <div className="checkBox-container" onClick={() => handleCheckBox(todoContainerRef)}>
                <img src={checkBoxEmpty} alt="" className='checkBox' />
            </div>
            <div className="todo-task-name">
                {taskName}
            </div>
        </div>
   )
}


export default function TodoList() {

    const { collapse } = useContext(PanelContext);
    const todoContainerRef = useRef([]);

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
            taskName: "Study Compiler Design",
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
                            <Todo
                                taskName={value.taskName}
                                handleCheckBox={handleCheckBox}
                            ></Todo>
                        )
                    })
                }
                
            </div>
        )
}