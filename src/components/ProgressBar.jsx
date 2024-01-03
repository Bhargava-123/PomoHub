import React, { useContext,useState,useEffect,useRef } from 'react'
import { TimerContext } from '../contexts/TimerContextProvider'

export default function ProgressBar() {

    const { initialTimer, secondsRemaining } = useContext(TimerContext);

    const progressRef = useRef();
    const fullTime = initialTimer * 60;

    useEffect(() => {
        progressRef.current.style.width = `${(1 - (secondsRemaining / fullTime)) * 100}%`;
    },[secondsRemaining])


    return (
        <div className='progress-bar-container'>
            <div ref = {progressRef}>

            </div>
      </div>
  )
}
