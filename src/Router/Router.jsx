import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'

const Router = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
  )
}

export default Router