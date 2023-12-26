import React from 'react';
import { Canvas } from '~/Canvas';
import { circle } from '~/sketch';

export const App = () => {
  return (
    <>
      <h1>Simple Ray Tracing with React + TypeScript + p5js</h1>
      <Canvas sketch={circle} />
    </>
  );
}
