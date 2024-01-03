import React, { useContext, useEffect,useRef,useState } from 'react'
import { useTimer } from 'react-timer-hook';
import pauseIcon from "../assets/pause.svg";
import playIcon from "../assets/play.svg";
import "../assets/css/PomodoroTimer.scss";
import stopIcon from "../assets/stop.svg";
import { TimerContext } from '../contexts/TimerContextProvider';
//STATES THAT NEED LOCALLY

//STATES THAT NEED GOLBALLY



function MyTimer({ expiryTimestamp, timerOffset }) {

    const {
        minutes,
        seconds,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => setTimerState("pause"),autoStart:false});


    const [timerState, setTimerState] = useState("pause");

    const progressBarRef = useRef();

    useEffect(() => {
        timerState === "resume" ? resume() : pause();
        var progress = 1 - ((minutes * 60 + seconds) / (timerOffset * 60));
        progressBarRef.current.style.width = `${progress * 100}%`;
    },[timerState,seconds,timerOffset])

    const handleTimerState = () => {
        if (timerState == "pause") {
            setTimerState("resume");
        }
        else {
            setTimerState("pause");
        }
    }

    const handleRestart = () => {
        const newTimeStamp = new Date();
        newTimeStamp.setMinutes(newTimeStamp.getMinutes() + timerOffset);
        restart(newTimeStamp, false);
        setTimerState("pause");
    }

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
            <div className="progress-bar-container">
                <div className="progress-bar" ref={progressBarRef}>
                </div>
            </div>
    
        </div>
    );
}

export default function PomodoroTimer() {

    const { timerOffset,expiryTimestamp } = useContext(TimerContext);
    return (
        <div className='timer-content-container'>
            <MyTimer expiryTimestamp={expiryTimestamp} timerOffset={timerOffset} />
            <h2>{timerOffset}</h2>
            <h2>{expiryTimestamp}</h2>
        </div>
    );
}
