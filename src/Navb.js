import React from 'react'
import logo from './Logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar} from 'react-bootstrap';
export default function Navb() {
    return (
        <div>
              <Navbar expand="lg" style={{
        background:'#D1DCDE'
      }}>
  <Navbar.Brand href="#home"><img src={logo} alt="Logo" style={{width: '10rem',
height: '2.5rem',
marginLeft:'1rem'
}} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav ">
    <Nav className="navbar-nav ml-auto">
      <Nav.Link href="/" style={{
        padding:'1.5rem'
      }} className="nav-item nav-link px-3">Home</Nav.Link>
      <Nav.Link href="/project" style={{
        padding:'1.5rem'
      }} className="nav-item nav-link px-3">Project</Nav.Link>
      <Nav.Link href="/services" style={{
        padding:'1.5rem',
        marginRight:'2rem'
      }} className="nav-item nav-link px-3">Services</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
  
   
  

  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
