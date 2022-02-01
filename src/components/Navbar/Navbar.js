import React, { useState, useEffect } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../elements/img/icon.svg';
import "./Navbar.css";

const Navi = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else handleShow(false);
      });
      return () => {
        window.removeEventListener("scroll");
      };
    }, []);
    const openForm = () => {
      document.getElementById("fom").style.display = "block";
    }
    
    const closeForm = () => {
      document.getElementById("fom").style.display = "none";
    }
        return (
            <Navbar bg="warning" variant="dark" expand="lg" sticky = "top">
            
                <Navbar.Brand> <Link to="/"  > <img src={`${logo}`} alt="logo" /> </Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <div className={`navbar ${show && "navblack"}`}>
                      <button className="gener" style = {{fontSize : '18px'}} onClick={openForm}>LOGIN</button>
                        
                        <div id="fom" className="forme">
                        <label htmlFor="show" className="close-btn" title="close" onClick={closeForm}>×</label>
                        <h2>WELCOME</h2>
                        <form action="/">
                         <label>Email or Phone</label>
                         <input type="text"/>
                        <label>Password</label>
                        <input type="password"/>
                        <a href="/">Forgot Password?</a>
                        <button>Submit</button>
                        <div className="link">Not a member? <a href="/">Sigup here</a></div>
            
                        </form>
                        </div>
                        </div>
                        <Nav.Link as={Link} to="/favourites" style = {{fontSize : '18px'}}>
                                <i className = "fas fa-heart pr-2 text-primary"></i>
                                <span className='text-primary'>Favorite</span>
                        </Nav.Link>
       
                        <Nav.Link as={Link} to="/watched" style = {{fontSize : '18px'}}>
                        <i className = "fas fa-bookmark pr-2 text-primary"></i>
                                <span className='text-primary'>Watched</span>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
}

export default Navi;


