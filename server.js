const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('wwwroot')); // serve files from wwwroot

app.listen(port, () => console.log(`App running on port ${port}`));