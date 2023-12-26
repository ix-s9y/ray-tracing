import React, { useEffect } from "react";
import p5 from 'p5';

type CanvasProps = {
  sketch: (p: p5) => void;
}

export const Canvas = (props: CanvasProps) => {

  useEffect(() => {
    new p5(props.sketch);

  }, [props.sketch]);

  return (<></>);
}
