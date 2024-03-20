import React from 'react'
import AlertButton from './AlertButton'

const objProps = [{
  message: 'Downloading!',
  children: 'Download File'
},
{
  message: 'Sharing!',
  children: 'Share Document'
}]

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
        {objProps.map((data) =>  {
          return (
          <div>
          <br />
          <AlertButton 
            message={data.message}
            children={data.children}
          />
          </div>
          )
        })}
    </div>
  )
}
