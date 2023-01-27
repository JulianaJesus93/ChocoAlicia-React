import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import Index from './components/pages/Index/Index'
import QuemSomos from './components/pages/QuemSomos'
import NossoTime from './components/pages/NossoTime'
import Presentes from './components/pages/Presentes/Presentes'
import Contato from './components/pages/Contato'

import LoginAdmin from './components/Admin/LoginAdmin'
import Admin from './components/Admin/Admin'
import Create from './components/Admin/Create'
import Update from './components/Admin/Update'

import ImpulseCompany from './components/ImpulseCompany/ImpulseCompany'


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/QuemSomos' element={<QuemSomos />} />
        <Route path='/NossoTime' element={<NossoTime />} />
        <Route path='/Presentes' element={<Presentes />} />
        <Route path='/Contato' element={<Contato />} />

        <Route path='/LoginAdmin' element={<LoginAdmin />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/Update' element={<Update />} />
        
        <Route path='/ImpulseCompany' element={<ImpulseCompany />} />
      </Routes>
    </>
  )
}

export default App

