const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload({
    limits: { fileSize: 500 * 1024 * 1024 },
    abortOnLimit: true
}));

app.post('/process', (req, res) => {
    if (!req.files?.video) return res.status(400).json({ error: 'No video uploaded' });
    
    // Process video here
    res.json({ 
        status: 'success',
        downloadUrl: `/processed/${Date.now()}_video.mp4`
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
