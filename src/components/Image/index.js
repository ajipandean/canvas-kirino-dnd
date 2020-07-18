import React from 'react';
import { Image as Img } from 'react-konva';
import useImage from 'use-image';

const scaleImage = {
  x: 0.2,
  y: 0.2,
}

function Image(props) {
  const [useableImage] = useImage(props.img.src);

  function handleDragStart(e) {
    e.target.setAttrs({
      shadowOffsetX: 50,
      shadowOffsetY: 50,
    });
  }

  function handleDragEnd(e) {
    e.target.to({
      duration: 0.1,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
    });
  }

  return (
    <Img
      draggable
      x={props.img.x}
      y={props.img.y}
      shadowColor="black"
      shadowBlur={10}
      shadowOpacity={0.4}
      image={useableImage}
      scale={scaleImage}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    />
  );
}

export default Image;