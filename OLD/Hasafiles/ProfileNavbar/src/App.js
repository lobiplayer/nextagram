
import React from 'react'
import { Link, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

function App() {

  

  return (
    <>
    <NavBar/>

      <Route exact path="/" component={HomePage}/>

      <Route path = "/profile/:id" component={ProfilePage}/>
    </>
  );
}

export default App;
