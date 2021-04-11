// dependencies
const express = require('express');
const path = require('path');

// express setup
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// port
const PORT = process.env.PORT || 5000;

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

// Start server
app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
