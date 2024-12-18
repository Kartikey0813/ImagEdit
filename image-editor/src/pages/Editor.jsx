import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Canvas, Image as FabricImage } from 'fabric';

function Editor() {
  const location = useLocation();
  const file = location.state?.file;

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      const canvas = new Canvas('editorCanvas');
      FabricImage.fromURL(reader.result, (img) => {
        img.scaleToWidth(500);
        canvas.add(img);
        canvas.setWidth(600);
        canvas.setHeight(400);
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }, [file]);

  return (
    <div>
      <h1>Image Editor</h1>
      <canvas id="editorCanvas" style={{ border: '1px solid #ccc' }}></canvas>
    </div>
  );
}

export default Editor;
