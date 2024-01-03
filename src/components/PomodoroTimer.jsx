import React, { useContext, useEffect,useState } from 'react'
import pauseIcon from "../assets/pause.svg";
import playIcon from "../assets/play.svg";
import "../assets/css/PomodoroTimer.scss";
import stopIcon from "../assets/stop.svg";

//WHAT TO DO WHEN THE TIMER ENDS ? RESET THE ORIGINAL EXPIRY TIME / GO TO BREAK /

import { useTimer } from '@mzaleski/use-timer';

export const PomodoroTimer = () => {
    const { timeRemaining, secondsRemaining, setFreeze, resetTimer,isFrozen } = useTimer(60, true,
        () => console.log('Timer finished!')
    );

    let timeObj = new Date(secondsRemaining * 1000);
    var minutes = timeObj.getUTCMinutes()
    var seconds = timeObj.getSeconds();

    const handleTimerState = () => {
        isFrozen ? setFreeze(false) : setFreeze(true);
    }
    return (
        <div className='timer-content-container'>
            <div className="timer-container">
                <div className='minutes-container'>{minutes.toString().padStart(2, '0')}</div>
                
                <div className="button-container">
                    <div onClick={() => handleTimerState()} className="pause-play-icon">
                        <img src={isFrozen ? playIcon : pauseIcon} alt=""  />
                    </div>
                    <div onClick={() => resetTimer(true)} className="pause-play-icon">
                        <img src={stopIcon} alt="" />
                    </div>
                    <div className='pause-play-icon'>
                    </div>
                </div>

                <div className='seconds-container'>{ seconds.toString().padStart(2,'0') }</div>
            </div>
        </div>
    );
}