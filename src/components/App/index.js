import React, { useRef, useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Stage, Layer } from 'react-konva';
import Image from '../Image';
import './style.css';

function App() {
  const dragUrl = useRef();
  const stageRef = useRef();
  const sidenavRef = useRef();

  const [sidenavWidth, setSidenavWidth] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setSidenavWidth(sidenavRef.current.offsetWidth);
  }, []);

  function handleClear() {
    setImages([]);
  }

  function handleUndo() {
    setImages(images.slice(0, -1));
  }

  return (
    <>
      <Navbar
        bg="white"
        fixed="top"
        expand="sm"
        className="shadow"
      >
        <Navbar.Brand href="#">Drawing Using React Konva</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={handleUndo}>Undo</Nav.Link>
            <Nav.Link onClick={handleClear}>Clear</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div
        ref={sidenavRef}
        className="position-fixed border-left bg-white sidenav"
      >
        <div className="container py-3">
          <img
            width="100%"
            draggable="true"
            className="img-fluid img-thumbnail"
            src={require('../../assets/img/kirino.png')} alt="Kirino"
            onDragStart={e => {
              dragUrl.current = e.target.src;
            }}
          />
        </div>
      </div>

      <div
        onDrop={e => {
          stageRef.current.setPointersPositions(e);
          setImages(images.concat([
            {
              src: dragUrl.current,
              ...stageRef.current.getPointerPosition(),
            },
          ]))
        }}
        onDragOver={e => e.preventDefault()}
      >
        <Stage
          ref={stageRef}
          width={window.innerWidth - sidenavWidth}
          height={window.innerHeight}
        >
          <Layer>
            {images.map((img, i) => {
              return <Image key={i} img={img} />
            })}
          </Layer>
        </Stage>
      </div>
    </>
  );
}

export default App;
