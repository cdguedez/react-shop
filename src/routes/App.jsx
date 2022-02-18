import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../assets/styles/global.css'
import Layout from '../containers/Layout'
import Home from '../pages/Home'
import Login from '../containers/Login'
import CreateNewPassword from '../containers/CreateNewPassword'
import RecoveryPassword from '../containers/RecoveryPassword'
import NotFound from '../pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/create-new-password" element={<CreateNewPassword />} />
            <Route exact path="/recovery-password/*" element={<RecoveryPassword />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App