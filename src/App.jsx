import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import CategoryPage from './pages/CategoryPage'

function App() {
  return (
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/Success' element={<Success />} />
      <Route path='/*' element={<Error />} />
      <Route path="/category/:name" element={<CategoryPage />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
    </Routes>
  )
}

export default App