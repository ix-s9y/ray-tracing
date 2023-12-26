import React from 'react';
import { Canvas } from '~/Canvas';
import { circle } from '~/sketch';

export const App = () => {
  return (
    <>
      <h1>React + TypeScript + p5js Template</h1>
      <Canvas sketch={circle} />
    </>
  );
}
