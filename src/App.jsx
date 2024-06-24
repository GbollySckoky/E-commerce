import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/Nav/NavBar'
import PoshPace from './pages/PoshPace/PoshPace'
import FilteredProduct from './components/FilteredProduct/FilteredProduct'
import FilteredProductId from './components/FilteredProductId/FilteredProductId'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Cart from './pages/Cart/Cart'
import Favourite from './pages/Favourites/Favourites'
import Footer from './components/Footer/Footer'
import EnhanceLook from './components/FilteredProductId/EnhanceLook'
import EmptyState from './components/EmptyState'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path='/' element={<PoshPace />}/>
        <Route path='/products/:category' element={<FilteredProduct />} />
        <Route path='/product/:category/:id' element={<FilteredProductId />}/>
        <Route path='/products/shoppingbag' element={<Cart/>} />
        <Route path='/products/favourites' element={<Favourite />}/>
        <Route path='/products/:category' element={<EnhanceLook />}/>
        <Route path='*' element={<EmptyState />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App