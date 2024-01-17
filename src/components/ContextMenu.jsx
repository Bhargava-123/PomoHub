import React, { useEffect,useRef } from 'react'
import deleteIcon from "../assets/todo-list-logos/delete.svg"
import editIcon from "../assets/todo-list-logos/edit.svg"
export default function ContextMenu({ x, y, show }) {

  const ref = useRef(null);
    return (
      <div className='context-menu-container' ref={ref} style={{
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
        zIndex: (show ? 20 : -20),
        opacity: show ? 100 : 0

      }}>
        <div className="context-menu-option edit">
          <div className="icon-container edit">
            <img src={editIcon} className='editIcon' alt="" />
          </div>
          <div className='context-menu-option name'>
            Edit
          </div>
        </div>
        <div className="context-menu-option delete">
          <div className="icon-container">
            <img src={deleteIcon} className='deleteIcon' alt="" />
          </div>
          <div className='context-menu-option name'>
            Delete
          </div>
        </div>
    </div>
  )
}
