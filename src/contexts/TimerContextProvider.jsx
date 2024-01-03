import { createContext, useTimer, useEffect, useState } from "react";


export const TimerContext = createContext({});


export default function TimerContextProvider({ children }) {


    const time = new Date();

    const timerModeSettings = {
        "workMode": 50,
        "shortBreak": 10,
        "longBreak" : 20,
    }
   
    const calculateTimeStamp = (time, timerOffset) => {
        time.setMinutes(time.getMinutes() + timerOffset);
        return time
    }
    const [timerMode, setTimerMode] = useState("work-mode");
    const [expiryTimeStamp, setExpiryTimeStamp] = useState(calculateTimeStamp(time,timerModeSettings.workMode));
    const [timerOffset, setTimerOffset] = useState(timerModeSettings.workMode);

    
    
    useEffect(() => {
        // console.log(timerMode);
        if (timerMode == "work-mode") {
            setTimerOffset(timerModeSettings.workMode);
            setExpiryTimeStamp(calculateTimeStamp(time, timerModeSettings.workMode));
            console.log(timerOffset);
        }
        else if (timerMode == "short-break") {
           
            setTimerOffset(timerModeSettings.shortBreak);
            setExpiryTimeStamp(calculateTimeStamp(time, timerModeSettings.shortBreak));
            console.log(timerOffset);
        }
        else if (timerMode == "long-break") {
            setTimerOffset(timerModeSettings.longBreak);
            setExpiryTimeStamp(calculateTimeStamp(time, timerModeSettings.longBreak));
            console.log(timerOffset);
        }

    }, [timerMode])
    
   const stateObjects = {setTimerMode,timerMode,timerOffset,expiryTimeStamp}
    return (
        <TimerContext.Provider value={stateObjects}>
            {children}
        </TimerContext.Provider>
    )
}
