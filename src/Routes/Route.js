import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../component/Home/Home'
import Login from '../component/Login/Login'
import Drawer from '../component/Product/Drawer'
import Product from '../component/Product/Product'
import ProductDetails from '../component/Product/ProductDetails'
import ProductList from '../component/Product/ProductList'
import Signup from '../component/Signup/Signup'
import Navbar from './Navbar'

const HomeRoute = () => {
  return (
  <>
  <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/product" element={<Product/>} /> */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/productlist" element={<ProductList/>} />
          <Route path="/productDetails/:productId" element={<ProductDetails />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/drawer" element={<Drawer/>}/>
      </Routes>
    </>
  )
}

export default HomeRoute