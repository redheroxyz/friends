const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.static(__dirname));

// Serve index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Use Vercel's port or default to 3000
const PORT = process.env.PORT || 3000;

// Export for Vercel
module.exports = app;

// Only listen locally, not on Vercel
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Server running at: http://localhost:${PORT}`);
    });
}