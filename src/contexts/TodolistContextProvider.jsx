import { useState,createContext,useEffect } from "react";


export const TodolistContext = createContext({});

export const TodolistContextProvider = ({ children }) => {
    const[task,setTask] = useState("");

    const[list,setList] = useState([]);

    const addItem = () =>{
        if(task.length>=1){
            setList([...list,{
                id : list.length === 0 ? 1 : list[list.length-1].id+1,
                taskName: task,
                isCompleted: false,
                edit: false,
            }]);
            setTask("");
        }
    }

    const deleteItem = (taskId) =>{
        const ns = list.filter((ele)=>ele.id !== taskId ? true : false);
        setList(ns);
    }

    const editItem = (taskId) =>{
        setList(list.map((ele) => {
            return ele.id !== taskId ? ele : {...ele, edit: true};
        }));
    }

    const change = (taskId) =>{
        setList(list.map((ele) => {
            return ele.id !== taskId ? ele : {...ele, edit: false, taskName: task};
        }));
    }
    useEffect(()=>{
        const data = window.localStorage.getItem("TODO_LIST_DATA");
        console.log("Hello") //remove this
        if(data !== null){
            setList(JSON.parse(data));
            window.localStorage.setItem("TODO_LIST_DATA",JSON.stringify(list));
            setList(JSON.parse(data));
        }
    },[])

    useEffect(() => {
        console.log("hi") // remove this
        window.localStorage.setItem("TODO_LIST_DATA",JSON.stringify(list));
    },[list])
    const statesObj = { list, setList, task, setTask, addItem, deleteItem,editItem,change}
    return (
        <TodolistContext.Provider value = {statesObj}>
            {children}
        </TodolistContext.Provider>
    )
}