import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { fabric } from 'fabric';

function Editor() {
  const location = useLocation();
  const canvasRef = useRef(null);

  useEffect(() => {
    const file = location.state?.file;

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const canvas = new fabric.Canvas('editorCanvas');
        fabric.Image.fromURL(reader.result, (img) => {
          img.scaleToWidth(500);
          canvas.add(img);
          canvas.setWidth(600);
          canvas.setHeight(400);
        });
      };
      reader.readAsDataURL(file);
    }
  }, [location]);

  return (
    <div>
      <h1>Image Editor</h1>
      <canvas id="editorCanvas" ref={canvasRef}></canvas>
    </div>
  );
}

export default Editor;
