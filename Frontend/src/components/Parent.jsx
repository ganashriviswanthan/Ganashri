import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="Ganashri" age={17} 
        marks={[90,91,93,92,99]}
        person={{name:"Ganashri",dept:["Bsc CT"]}} 
        />
    </div>
  )
}

export default Parent
