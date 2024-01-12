import React from 'react'

export default function ContextMenu({ x, y, show }) {
    return (
        <div className='context-menu-container' style={{
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
            zIndex: (show ? 20 : -20)
          
      }}>
          <div>Edit</div>
          <div>Delete</div>
    </div>
  )
}
