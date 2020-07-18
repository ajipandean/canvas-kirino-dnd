import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar
        bg="white"
        fixed="top"
        expand="sm"
        className="border-bottom"
      >
        <Navbar.Brand href="#">Drawing Using React Konva</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>Undo</Nav.Link>
            <Nav.Link>Clear</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default App;
