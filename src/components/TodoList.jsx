import React, { useContext } from 'react'
import "../assets/css/TodoList.scss"
import { PanelContext } from '../contexts/PanelContextProvider'
export default function TodoList() {

    const { collapse } = useContext(PanelContext);

  return (
      <div
          className={`todo-list-container ${!collapse ? "collapse" : ""}`}>
          <div className="todo-container">
              <div className="checkbox">
                  <input type="checkbox" name="" id="" />
              </div>
              <div className="todo-task-name">
                  study vcc
              </div>
          </div>
          <div className="todo-container">
              <div className="checkbox">
                    <input type="checkbox" name="" id="" />
              </div>
              <div className="todo-task-name">
                    study css
              </div>
          </div>
      
    </div>
  )
}
