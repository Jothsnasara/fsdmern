import { AppBar,Button,Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
       <AppBar>
         
            <Toolbar>
                <h3>myapp</h3> &nbsp;
                <Link to="/login">
                 <Button  variant="contained" color='secondary'>login</Button> 
                 </Link>&nbsp;
                <Link to="/sign">
                <Button  variant="contained" color='secondary'>signup</Button> 
                </Link>&nbsp;
                <Link to="/name">
                <Button  variant="contained" color='secondary'>add</Button> 
                </Link>&nbsp;
                <Link to="/user">
                <Button  variant="contained" color='secondary'>user</Button> 
                </Link>&nbsp;
                <Link to="/product">
                <Button  variant="contained" color='secondary'>product</Button> 
                </Link>&nbsp;
                
                
                


            </Toolbar>

    

       </AppBar>

     <br /><br />
    </div>
  )
}

export default NavBar