import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter =() => {
    var[count,setCount]=useState(0)
    
    const add=()=>{
    setCount(count+1)
   }
   const sub=()=>{
    setCount(count-1)
   }
  return (
    <div>
         <h5>Count: {count}</h5>
        <Button  variant="contained" color="success" onClick={add}>+</Button>
        <Button  variant="contained" color="error" onClick={sub}>-</Button>
    </div>
  )
}
 export default Counter