import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../assets/styles/global.css"
import Layout from "@containers/Layout"
import Home from "@pages/Home"
import Login from "@containers/Login"
import ForgotPassword from '@containers/ForgotPassword'
import CreateNewPassword from "@containers/CreateNewPassword"
import RecoveryPassword from "@containers/RecoveryPassword"
import NotFound from "@pages/NotFound"
import Register from "@containers/Register"
import MyAccount from "@containers/MyAccount"
import EditAccount from "@containers/EditAccount"
import MyOrders from '@components/MyOrders'
import AppContext from "@context/AppContext"
import useInitialState from "@hooks/useInitialState"

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter basename="/react-shop/">
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route
              exact
              path="/recovery-password/*"
              element={<RecoveryPassword />}
            />
            <Route
              exact
              path="/create-new-password"
              element={<CreateNewPassword />}
            />
            <Route exact path="/my-account" element={<MyAccount />} />
            <Route exact path="/edit-account" element={<EditAccount />} />
            <Route exact path="/my-orders" element={<MyOrders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
