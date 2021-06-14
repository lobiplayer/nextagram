import React from 'react'
import { Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';

import './App.css'

import HomePage from './pages/HomePage'
import UserProfilePage from './pages/UserProfilePage'
import NavBar from './components/NavBar';
import SignUpComponent from './components/SignUpComponent'

function App() {


  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NavBar />

      <Route exact path="/" component={HomePage} />
      <Route path="/users/:id" component={UserProfilePage} />
      {/* <Route path="/users/me" component={myProfilePage} /> */}
      <Route path="/signup" component={SignUpComponent} />
    </div>
  );
}

export default App;
