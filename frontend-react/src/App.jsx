import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import AuthProvider from './AuthProvider'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter >
          <Header />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
