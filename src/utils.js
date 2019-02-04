class Canvas {
  create({ height, width }) {
    const canvas = document.createElement('canvas');
    canvas.style.height = height;
    canvas.style.width = width;
    document.body.appendChild(canvas);
  }
}

const canvas = new Canvas;
canvas.create({ height: '200px', width: '300px' });
export default canvas;