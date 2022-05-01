import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './shared/Header/Header'
import Home from './pages/Home/Home'
import Inventory from './pages/Inventory/Inventory'
import Blog from './pages/Blog/Blog'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

const App = () => {
  return (
    <>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/inventory' element={<Inventory/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </>
  )
}

export default App