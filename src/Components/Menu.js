import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "react-bootstrap/Image";
import{BrowserRouter as Router,Routes, Route,Link} from "react-router-dom";

function Menu() {
  return (
    <div>
        <Navbar style={{ background: '#ed1a1a'}}>
        <Container>
        <Navbar.Brand >
        <Link className='text-decoration-none text-black' to="/">
        <Image
        src=
        "https://upload.wikimedia.org/wikipedia/commons/3/36/Arca_continental_logo.png"
        thumbnail width={120}/>
      </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link >
                <Link className='text-decoration-none text-black' to="/">Solicitud</Link>
            </Nav.Link>
            <Nav.Link >
                <Link className='text-decoration-none text-black'  to="/About">About</Link>
            </Nav.Link>
        </Nav>
        </Container>
    </Navbar>
  </div>
  )
}

export default Menu