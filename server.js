const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Serve static files like index.html
app.use(express.static('public')); // or '.' if index.html is in root

// Optional: explicitly handle root
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // make sure path matches your file
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
