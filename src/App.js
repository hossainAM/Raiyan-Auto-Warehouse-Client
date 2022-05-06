import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './shared/Header/Header'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import InventoryDetails from './pages/Inventory/InventoryDetails'
import ManageInventory from './pages/ManageInventory/ManageInventory';
import RequireAuth from './pages/Login/RequireAuth'

const App = () => {
  return (
    <>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/manageinventory' element={<ManageInventory/>}/>
          <Route path='/inventory/:id' element={
            <RequireAuth>
              <InventoryDetails/>
            </RequireAuth>}/>
          <Route path='/additems' element={
            <RequireAuth>
              <InventoryDetails/>
            </RequireAuth>}/>
          <Route path='/myitems' element={
            <RequireAuth>
              <InventoryDetails/>
            </RequireAuth>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </>
  )
}

export default App