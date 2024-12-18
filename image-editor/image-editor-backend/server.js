const express = require('express');
const cors = require('cors');
const imageRoutes = require('./routes/imageRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded files
app.use('/api/images', imageRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));