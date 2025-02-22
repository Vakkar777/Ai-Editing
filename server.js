// server.js
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload({
    limits: { fileSize: 500 * 1024 * 1024 },
    abortOnLimit: true
}));

// Video Processing Endpoint
app.post('/process', (req, res) => {
    if (!req.files || !req.files.video) {
        return res.status(400).send('No video uploaded');
    }

    const video = req.files.video;
    // Process video with FFmpeg/AI models
    res.json({ status: 'success', url: '/processed.mp4' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
