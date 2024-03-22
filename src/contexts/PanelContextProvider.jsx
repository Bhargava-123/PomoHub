import { createContext } from "react";
import { useState } from "react";

export const PanelContext = createContext({});

export const PanelContextProvider = ({ children }) => {
    
    const [collapse, setCollapse] = useState(false);

    const handleCollapse = () => {
        setCollapse(!collapse)
    }

    const handleTodoList = () => {
        // setCollapse(!collapse)
    }

    const statesObj = {collapse,handleCollapse,handleTodoList}
    return (
        <PanelContext.Provider value = {statesObj}>
            {children}
        </PanelContext.Provider>
    )
}