import { useState,createContext,useEffect } from "react";


export const TodolistContext = createContext({});

export const TodolistContextProvider = ({ children }) => {
    const[task,setTask] = useState("");

    useEffect(()=>{
        
    })

    const todoTaskList = [
        {
            id:1,
            taskName: "Study Compiler Design asldkfj",
            isCompleted: false,

        },
        {
            id:2,
            taskName: "Study Crypto",
            isCompleted: true,
        },
        {
            id:3,
            taskName: "STudy DSA",
            isCompleted: false,
        }
    ]
    const[list,setList] = useState(todoTaskList);
    const addItem = () =>{
        setList([...list,{
            id : list.length === 0 ? 1 : list[list.length-1].id+1,
            taskName: task,
            isCompleted: false,
        }]);
    }
    const statesObj = {todoTaskList, list, setList, task, setTask, addItem}
    return (
        <TodolistContext.Provider value = {statesObj}>
            {children}
        </TodolistContext.Provider>
    )
}