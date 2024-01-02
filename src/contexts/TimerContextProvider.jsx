import { createContext, useTimer, useEffect, useState } from "react";


export const TimeContext = createContext({});


export default function TimerContextProvider({children}) {

    const {
        setSeconds,
        setHours,
        setMinutes,
        minutes,
        seconds,
        hours,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => setTimerState("pause"), autoStart: false });


    const [timerState, setTimerState] = useState("pause");

    useEffect(() => {
        console.log(expiryTimestamp);
        timerState === "resume" ? resume() : pause();
    }, [timerState])

    const handleTimerState = () => {
        if (timerState == "pause") {
            setTimerState("resume");
        }
        else {
            setTimerState("pause");
        }
    }

    const handleRestart = () => {
        const time = new Date();
        time.setMinutes(time.getMinutes() + workTime);
        restart(time, false);
        setTimerState("pause");
    }

    const stateObjects = {
        minutes,
        seconds,
        pause,
        resume,
        restart,
        timerState,
        setTimerState,
        handleTimerState,
        handleRestart,
}
    return (
        <TimerContex.Provider value={stateObjects}>
            {children}
        </TimerContex.Provider>
  )
}
