import  timer  from "../assets/timer.svg";
export const PanelHeader = () => {
    return (
        <div className="panel-header expanded">
            <p id="Pomo">
                P
            </p>
            <img src={timer} className="timer-icon-header" alt="" />
            <p>
                mo
            </p>
            <p id="Hub">
                Hub
            </p>
        </div>
    )
}