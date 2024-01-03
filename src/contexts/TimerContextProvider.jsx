import { createContext,  useEffect, useState } from "react";
import { useTimer }  from '@mzaleski/use-timer';


export const TimerContext = createContext({});


export default function TimerContextProvider({ children }) {
    
    const timerSetting = {
        "work-mode" :50,
        "short-break": 10,
        "long-break" : 20
    }
    const [timerMode, setTimerMode] = useState("work-mode");
    const [initialTimer, setInitialTimer] = useState(timerSetting["work-mode"]);

    useEffect(() => {
            setInitialTimer(timerSetting[timerMode])
    },[timerMode])

    const { timeRemaining, secondsRemaining, setFreeze, resetTimer, isFrozen } =
    useTimer(initialTimer*60, true,
        () => console.log('Timer finished!')
    );

    let timeObj = new Date(secondsRemaining * 1000);
    var minutes = timeObj.getUTCMinutes()
    var seconds = timeObj.getSeconds();

    const handleTimerState = () => {
        isFrozen ? setFreeze(false) : setFreeze(true);
    }

   const stateObjects = {minutes,seconds,handleTimerState,resetTimer,isFrozen,setTimerMode}
    return (
        <TimerContext.Provider value={stateObjects}>
            {children}
        </TimerContext.Provider>
    )
}
