import { createContext, useTimer, useEffect, useState } from "react";


export const TimerContext = createContext({});


export default function TimerContextProvider({ children }) {


    const time = new Date();

    const timerModeSettings = {
        "workMode": 50,
        "shortBreak": 10,
        "longBreak" : 20,
    }
    const [timerMode, setTimerMode] = useState("work-mode");
    const [expiryTimeStamp, setExpiryTimeStamp] = useState(time);
    const [timerOffset, setTimerOffset] = useState(timerModeSettings.workMode);

    const calculateTimeStamp = (time,timerOffset) => {
        return time.setMinutes(time.getMinutes() + timerOffset);
    }
    
    useEffect(() => {
        // console.log(timerMode);
        if (timerMode == "work-mode") {
            console.log("work-mode");
            setTimerOffset(timerModeSettings.workMode);
            setExpiryTimeStamp(calculateTimeStamp(time,timerModeSettings.workMode));
        }
        else if (timerMode == "short-break") {
            console.log("short-break");
            setTimerOffset(timerModeSettings.shortBreak);
            setExpiryTimeStamp(calculateTimeStamp(time,timerModeSettings.shortBreak));
        }
        else if (timerMode == "long-break") {
            setTimerOffset(timerModeSettings.longBreak);
            setExpiryTimeStamp(calculateTimeStamp(time,timerModeSettings.longBreak));
        }

    }, [timerMode])
    
   const stateObjects = {setTimerMode,timerMode,timerOffset,expiryTimeStamp}
    return (
        <TimerContext.Provider value={stateObjects}>
            {children}
        </TimerContext.Provider>
    )
}
