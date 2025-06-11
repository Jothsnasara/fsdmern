import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>Signup Page</h1>
       <TextField label="Name" variant="filled"/> <br /><br />
       <TextField label="Age" variant="filled" /> <br /><br />
       <TextField label="Phone" variant="filled"/> <br /><br />
       <TextField label="Password" variant="filled" type='password'/> <br /><br />
       <Button  variant="contained">Signup</Button>
        </div>
  )
}

export default Signup