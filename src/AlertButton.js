import React from 'react'

export default function AlertButton({message, children}) {
  function handleSubmit(e) {
    e.preventDefault();
    alert(message);
    
  }

  return (
    <div>
        <button onClick={handleSubmit}>{children}</button>
    </div>
  )
}
