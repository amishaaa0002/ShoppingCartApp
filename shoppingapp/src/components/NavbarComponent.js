import React from 'react';
import {Button, Container, Navbar, Model} from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar expand="sm">

        <Navbar.Brand href="\">  Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
            <Button>Cart Items - 0</Button>

        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent;

