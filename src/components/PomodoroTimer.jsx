import React, { useContext, useEffect,useState } from 'react'
import pauseIcon from "../assets/pause.svg";
import playIcon from "../assets/play.svg";
import "../assets/css/PomodoroTimer.scss";
import stopIcon from "../assets/stop.svg";

//WHAT TO DO WHEN THE TIMER ENDS ? RESET THE ORIGINAL EXPIRY TIME / GO TO BREAK /

import { useTimer } from '@mzaleski/use-timer';

export const PomodoroTimer = () => {
    const { timeRemaining, secondsRemaining, setFreeze, resetTimer,isFrozen } = useTimer(65, false,
        () => console.log('Timer finished!')
    );

    let timeObj = new Date(secondsRemaining * 1000);
    var minutes = timeObj.getUTCMinutes()
    var seconds = timeObj.getSeconds();
    console.log(minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0'));
    return (
        <div className='timer-container=container'>
            <div className="timer-container">
                <div>{minutes.toString().padStart(2,'0')}</div>
                <div className="button-container">
                    <div className="pause-play-icon">

                        {/* <img src={isFrozen ? playIcon : pauseIcon} alt=""  />
                        <img src={stopIcon} alt="" /> */}
                    </div>
                </div>
                <div>{ minutes.toString().padStart(2,'0') }</div>
            </div>
        </div>
    );
}