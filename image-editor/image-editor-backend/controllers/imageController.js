const sharp = require('sharp');
const path = require('path');

exports.resizeImage = async (req, res) => {
  const { width, height } = req.body;

  try {
    const inputPath = req.file.path;
    const outputPath = path.join(__dirname, '..', 'uploads', `resized-${Date.now()}.png`);

    await sharp(inputPath)
      .resize({ width: parseInt(width), height: parseInt(height) })
      .toFile(outputPath);

    res.status(200).json({
      message: 'Image resized successfully!',
      url: `/uploads/${path.basename(outputPath)}`,
    });
  } catch (error) {
    res.status(500).send({ error: 'Failed to resize image' });
  }
};
