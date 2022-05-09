import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './shared/Header/Header'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import InventoryDetails from './pages/Inventory/InventoryDetails'
import ManageInventory from './pages/ManageInventory/ManageInventory';
import RequireAuth from './pages/Login/RequireAuth'
import MyItems from './pages/MyItems/MyItems'
import AddInventoryItems from './pages/AddInventoryItems/AddInventoryItems'
import NotFound from './pages/NotFound/NotFound'
import MobileView from './pages/ManageInventory/MobileView'

const App = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakPoint = 640;

  useEffect(() => {
   const handleWindowResize = () => setWidth(window.innerWidth);
   window.addEventListener("resize", handleWindowResize);

   return () => window.removeEventListener("resize", handleWindowResize);
  },[]);

  return (
    <>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/inventory/:id' element={
            <RequireAuth>
              <InventoryDetails/>
            </RequireAuth>}/>
            <Route path='/manageinventory' element={width > breakPoint ? <ManageInventory/> : <MobileView/>}/>
           < Route path = "/addinventory" element={<AddInventoryItems/>}/>
          <Route path='/myitems' element={
            <RequireAuth>
              <MyItems/>
            </RequireAuth>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </>
  )
}

export default App