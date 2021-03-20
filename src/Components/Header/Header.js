import React from 'react';
import './Header.css';
import '../Destination/Destination';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import { Navbar,Nav,Button } from 'react-bootstrap';

const Header = () => {
 
    return (
        <div>
 
 {/* <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Your Moto </Navbar.Brand>
    <Nav className="mr-auto">
     <Nav><Link to="/home">Home</Link></Nav>
     <Link to="/destination">Destination</Link>
      
      <Link to href="#pricing">Contact</Link>
      <Link to href="#pricing">Blog</Link>
      <Button variant="secondary" >Login</Button>


    </Nav>
   
   

  </Navbar> */}

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Your Moto</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/home">  <a class="nav-link active" aria-current="page">Home</a></Link>
        </li>
        <li class="nav-item">
          <Link  to="/destination"><a class="nav-link" >Destination</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Class</a>
        </li>
        
        
      </ul>
      <form class="d-flex">
        
            <Link to="/login">
            
            <button class="btn btn-outline-success">Login</button>
            </Link>
      </form>
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default Header;