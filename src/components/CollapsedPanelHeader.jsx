import  timer  from "../assets/timer.svg";
export const CollapsedPanelHeader = () => {
    return (<div className="panel-header collapsed">
        {/* <img src={timer} className="timer-icon-header" alt="" /> */}
        <p id="Pomo">
            P
        </p>
        <p id="Hub">
             <img src={timer} className="timer-icon-header" alt="" /> 
        </p>
    </div>
    )
}