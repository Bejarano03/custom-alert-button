import React from 'react'
import AlertButton from './AlertButton'

export default function Toolbar() {
  return (
    <div>
        <AlertButton
            message={"Hello, World!"}
            children={"Click Me Please"}
        />
        <br />
        <AlertButton 
            message={"I like to run."}
            children={"Click Me Please"}
        />
    </div>
  )
}
