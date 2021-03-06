import React from 'react'
import { Link } from "gatsby"
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import logo from '../images/logo.png'
import '../styles/navbar.css'

const NavBar = () => (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
  <Navbar.Brand href="#">
  <img
        src={logo}
        width="240"
        height="60"
        className="d-inline-block align-top"
        alt="ekstek logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
      <Link to="/about/"><Nav.Link href="/about">About</Nav.Link></Link>
      <Link to="/team/"><Nav.Link href="/team">Team</Nav.Link></Link>
      <Link to="/contact/"><Nav.Link href="/contact">Contact</Nav.Link></Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default NavBar