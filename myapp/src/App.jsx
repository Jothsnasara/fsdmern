import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { AppBar } from '@mui/material'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Name from './components/name'
import User from './components/user'
import Product from './components/product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign' element={<Signup/>}/>
        <Route path='/name' element={<Name/>}/>
        <Route path='/user' element={<User/>}/>
         <Route path='/product' element={<Product/>}/>


      </Routes>
      
     
    </>
  )
}

export default App
