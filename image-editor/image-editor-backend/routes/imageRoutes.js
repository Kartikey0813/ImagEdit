const express = require('express');
const multer = require('multer');
const { resizeImage } = require('../controllers/imageController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/resize', upload.single('image'), resizeImage);

module.exports = router;
