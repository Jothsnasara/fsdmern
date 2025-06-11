import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

{/*const Name = () => {
  
 var[name,setName]=useState("JOTHSNA")
 var[a,seta]=useState()
  
  

  const inputHandler=(e)=>{
  console.log(e.target.value)
   setName(e.target.value)}
   const addhandler=()=>{
    seta(name)
   }*/}
   const Name =() => {
       var[count,setCount]=useState(0)
       
       const add=()=>{
       setCount(count+1)
      }
      const sub=()=>{
       setCount(count-1)
      }
 {/*const Name =() =>{
    var[name,setName]=useState()
    const inputHandler=(e)=>{
  console.log(e.target.value)
   setName(e.target.value)}
   const addhandler=()=>{
    seta(name)
  }*/}
  return (
    <div>
      {/* <h4>Welcome {a}</h4>
        <TextField label=" Enter Name" variant="filled" onChange={inputHandler} /><br/>
        <Button  variant="contained" onClick={addhandler}>add</Button>*/}
          <h5>Count: {count}</h5>
                <Button  variant="contained" color="success" onClick={add}>+</Button>
                <Button  variant="contained" color="error" onClick={sub}>-</Button>
                
        
        {/*<Button  variant="contained" onClick={addhandler}>react</Button>
        <Button  variant="contained" onClick={addhandler}>full</Button>
        <Button  variant="contained" onClick={addhandler}>stack</Button>*/}

    </div>
  )
}


export default Name
