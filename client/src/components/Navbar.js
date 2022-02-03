import React from 'react';
import {Link} from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../assets/images/logo.png'
import '../App.css'


function Navbar() {
  return <>
  <nav class="navbar navbar-expand-lg navbar-dark  ">
  <Link class="navbar-brand" to="/">
  <img src={logo} width={50} alt='logo' /><span>FewaTech</span> 
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
  <ul class="navbar-nav active text-center ms-auto">
      <li class="nav-item ">
        <Link class="nav-link " to='/'>Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/signup" >Signup</Link>
      </li>
      <li class="nav-item ">
        <Link class="nav-link " to="/login">Login</Link>
      </li>      
    </ul>

  </div>
</nav>
  </>;
}

export default Navbar;
