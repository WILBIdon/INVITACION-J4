const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable static file serving from the root directory
// Express's static handler supports Range requests automatically, which is essential for video streaming.
app.use(express.static(path.join(__dirname)));

// Fallback to index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
