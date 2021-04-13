// dependencies
const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

// imported modules
let db = require('./db/db.json');

// express setup
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

// port
const PORT = process.env.PORT || 5000;

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.get('/api/notes', (req, res) => res.json(db));

// post route for api
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  db.push(newNote);
  console.log(
    `"title": "${newNote.title}", "text": "${newNote.text}"  "id": "${newNote.id}" posted to db.json`
  );
  fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
    if (err) throw err;
    console.log("Couldn't post new note");
  });
  res.json(newNote);
});

// delete route for api
app.delete('/api/notes/:id', (req, res) => {
  console.log(req.params.id);
  const updatedDb = db.filter((deletedNote) => deletedNote.id != req.params.id);
  db = updatedDb;
  fs.writeFile('./db/db.json', JSON.stringify(updatedDb), (err) => {
    if (err) throw err;
  });
  console.log('Note deleted!');
  res.json(updatedDb);
});

// Start server
app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
