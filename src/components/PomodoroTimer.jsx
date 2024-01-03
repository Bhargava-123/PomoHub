import React, { useContext, useEffect,useState } from 'react'
import pauseIcon from "../assets/pause.svg";
import playIcon from "../assets/play.svg";
import "../assets/css/PomodoroTimer.scss";
import stopIcon from "../assets/stop.svg";
import { TimerContext } from '../contexts/TimerContextProvider';

//WHAT TO DO WHEN THE TIMER ENDS ? RESET THE ORIGINAL EXPIRY TIME / GO TO BREAK /

import { useTimer } from '@mzaleski/use-timer';

export const PomodoroTimer = () => {

    const { minutes, seconds, handleTimerState, resetTimer, isFrozen } = useContext(TimerContext);
    // const { timeRemaining, secondsRemaining, setFreeze, resetTimer,isFrozen } = useTimer(60, true,
    //     () => console.log('Timer finished!')
    // );

    // let timeObj = new Date(secondsRemaining * 1000);
    // var minutes = timeObj.getUTCMinutes()
    // var seconds = timeObj.getSeconds();

    // const handleTimerState = () => {
    //     isFrozen ? setFreeze(false) : setFreeze(true);
    // }
    return (
        <div className='timer-content-container'>
            <div className="timer-container">
                <div className='minutes-container'>{minutes.toString().padStart(2, '0')}</div>
                
                <div className="button-container">
                    <img src={isFrozen ? playIcon : pauseIcon} alt="" onClick={() => handleTimerState()} className="pause-play-icon" />
                    
                    <img className="pause-play-icon" src={stopIcon} alt="" onClick={() => resetTimer(true)} />
                </div>

                <div className='seconds-container'>{ seconds.toString().padStart(2,'0') }</div>
            </div>
        </div>
    );
}