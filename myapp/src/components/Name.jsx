
import { Button, TextField } from '@mui/material'
import React, { useState ,useEffect} from 'react'

const Name = () => {
  var[name,setName]=useState("jothsna")
  var[a,seta]=useState()
  var[count,setCount]=useState(0)
  var[b,setb]=useState()
  const re=()=>{
          setb('react')
      }
      const fu=()=>{
          setb('full')
      }
      const st=()=>{
          setb('stack')
      }
  const inputHandler=(c)=>{
    console.log(c.target.value)
    setName(c.target.value)
  }
  const outputHandler=()=>{
    seta(name)
  }
  const add=()=>{
    setCount(count+1)
  }
  const sub=()=>{
    setCount(count-1)
  }
  useEffect(()=>{
    re()
  },[])
  return (
    <div>
        {/* <h1>welcome {na}</h1> */}
        {/*<h2>count: {go}</h2>*/}
        {/* <TextField variant='outlined' label='enter name' onChange={inputHandler}/><br /> */}
        <h1>welcome to {b}</h1>
        <Button variant="contained" color="secondary" onClick={re}>react</Button>
        <Button variant="contained" color="secondary" onClick={fu}>full</Button>
        <Button variant="contained" color="secondary" onClick={st}>stack</Button>
        {/*<Button variant="contained" color="secondary" onClick={outputHandler}>Add</Button>
        <Button variant="contained" color="secondary" onClick={counterr}>+</Button>
        <Button variant="contained" color="secondary" onClick={counter}>-</Button>*/}
    </div>
  )
}

export default Name




