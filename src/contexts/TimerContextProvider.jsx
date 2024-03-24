import { createContext,  useEffect, useState } from "react";
import { useTimer } from '@mzaleski/use-timer';
import { Howl, Howler } from 'howler';
export const TimerContext = createContext({});
import path from "path";
import sound_path from "/sounds/alarm.mp3"

export default function TimerContextProvider({ children }) {
    
    const timerSetting = {
        "work-mode" : 50,
        "short-break": 10,
        "long-break" : 20
    }
    const [timerMode, setTimerMode] = useState("work-mode");
    //BUG: TIMER SESSION RESETS ONCE WE RELOD THE PAGE
    const [timerSession, setTimerSession] = useState(0); //this is what we are working on.
    const [timerCompleted, setTimerCompleted] = useState(false);
    const [initialTimer, setInitialTimer] = useState(timerSetting["work-mode"]);
    const [editSession,setEditSession] = useState(false);
    const [totalSession, setTotalSession] = useState(0);

    useEffect(() => {
        setInitialTimer(timerSetting[timerMode])
        console.log(timerSession);
    },[timerMode,timerSession])

    //
    useEffect(() => {
        const completed_data = window.localStorage.getItem('TIMER_SESSION_STATE');
        const total_data = window.localStorage.getItem('TOTAL_SESSION_STATE');
        if ( completed_data !== null ) {
            setTimerSession(JSON.parse(completed_data));
            setTotalSession(JSON.parse(total_data));

        }
      }, []);
      
    useEffect(() => {
        window.localStorage.setItem('TIMER_SESSION_STATE', JSON.stringify(timerSession));
        window.localStorage.setItem('TOTAL_SESSION_STATE', JSON.stringify(parseInt(totalSession)));
      }, [timerSession,totalSession]);
    
      //
    const { secondsRemaining, setFreeze, resetTimer, isFrozen } =
    useTimer(initialTimer*60, true,
        () => {

            setTimerCompleted(true);
            var sound = new Howl({
                src: [sound_path]
            });
            sound.play()
            if (timerMode === "work-mode") {
                setTimerSession(timerSession + 1);
            }
        }
    );

    let timeObj = new Date(secondsRemaining * 1000);
    var minutes = timeObj.getUTCMinutes()
    var seconds = timeObj.getSeconds();

    const localStorageReset = (key) => {
        window.localStorage.removeItem(key);
        setTimerSession(0);
    }

    const handleTimerState = () => {
        if (timerCompleted == false) {
            isFrozen ? setFreeze(false) : setFreeze(true);
        }
        else if (timerCompleted == true) {
            resetTimer(true);
            setTimerCompleted(false);
        }
        
    }

   const stateObjects = {minutes,seconds,handleTimerState,resetTimer,isFrozen,setTimerMode,initialTimer,secondsRemaining,timerCompleted,setTimerCompleted,timerSession,localStorageReset,editSession,setEditSession,totalSession, setTotalSession}
    return (
        <TimerContext.Provider value={stateObjects}>
            {children}
        </TimerContext.Provider>
    )
}
