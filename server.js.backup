const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Allow requests from web browser
app.use(cors());
// Serve our HTML file
app.use(express.static(__dirname));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at: http://localhost:${PORT}`);
    console.log('Open this URL in your web browser!');
});