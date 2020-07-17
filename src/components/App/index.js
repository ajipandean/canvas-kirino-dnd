import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="#">Drawing Hooks Using Canvas API</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Button variant="light">Undo</Button>
            <Button variant="light">Clear</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <canvas/>
    </>
  );
}

export default App;
