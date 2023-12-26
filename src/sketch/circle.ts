import p5 from 'p5';

export const circle = (p: p5) => {

  p.setup = () => {
    p.createCanvas(640, 480);
  }

  p.draw = () => {
    p.background(255);

    p.fill((p.mouseIsPressed) ? 0 : 255);
    p.ellipse(p.mouseX, p.mouseY, 40, 40);
  }
}
