import { createContext, useTimer, useEffect, useState } from "react";


export const TimerContext = createContext({});


export default function TimerContextProvider({ children }) {
    
    const [timerMode, setTimeMode] = useState("work");

   const stateObjects = {}
    return (
        <TimerContext.Provider value={stateObjects}>
            {children}
        </TimerContext.Provider>
    )
}
