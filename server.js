const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const port = 3000; // or any port you prefer

// Enable all files compression
app.use(compression());

// Serve your static files (HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, '/'))); //the directory where your index.html is located

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
