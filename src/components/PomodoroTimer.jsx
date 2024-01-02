import React, { useContext, useEffect } from 'react'
import { useTimer } from 'react-timer-hook';
import pauseIcon from "../assets/pause.svg";
import playIcon from "../assets/play.svg";
import "../assets/css/PomodoroTimer.scss";
import stopIcon from "../assets/stop.svg";
import { TimeContext } from '../contexts/TimerContextProvider';

//WHAT TO DO WHEN THE TIMER ENDS ? RESET THE ORIGINAL EXPIRY TIME / GO TO BREAK /

import { useState } from 'react';
function MyTimer({ expiryTimestamp, workTime }) {

    const {
        minutes,
        seconds,
        timerState,
        handleTimerState,
        handleRestart,
    } = useContext(TimeContext);

    // const {
    //     minutes,
    //     seconds,
    //     pause,
    //     resume,
    //     restart,
    // } = useTimer({ expiryTimestamp, onExpire: () => setTimerState("pause"),autoStart:false});


    // const [timerState, setTimerState] = useState("pause");

    // useEffect(() => {
    //     timerState === "resume" ? resume() : pause();
    // },[timerState])

    // const handleTimerState = () => {
    //     if (timerState == "pause") {
    //         setTimerState("resume");
    //     }
    //     else {
    //         setTimerState("pause");
    //     }
    // }

    // const handleRestart = () => {
    //     const time = new Date();
    //     time.setMinutes(time.getMinutes() + workTime);
    //     restart(time, false);
    //     setTimerState("pause");
    // }

    return (
        <div >
            <div className="timer-container">
                <div className="minutes-container">
                    {minutes.toString().padStart(2,'0')}
                </div>
                <div className="button-container">
                    <img src={timerState === "pause" ? playIcon : pauseIcon} alt="" onClick={handleTimerState} className='pause-play-icon' />
                    <img src={stopIcon} alt="" onClick={handleRestart} className='pause-play-icon'/>

                </div>
                <div className="seconds-container">
                    {seconds.toString().padStart(2, '0')}
                </div>
            </div>
            
            
            {/* <button onClick={() => pause()}>Pause</button>
             */}
            {/* <button onClick={() => {
                // Restarts to 5 minutes timer
                const time = new Date();
                time.setSeconds(0);
                restart(time,false)
            }}>Reset</button> */}
        </div>
    );
}

export default function PomodoroTimer() {
    const time = new Date();

    const workTime = 10;

    time.setMinutes(time.getMinutes()+workTime);
    console.log(time);
    return (
        <div className='timer-content-container'>
            <MyTimer expiryTimestamp={time} workTime = {workTime} />
        </div>
    );
}
