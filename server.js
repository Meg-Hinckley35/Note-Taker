// Import express package
const express = require('express');
const path = require('path');
// Import notes.json file and assign to variable 'noteData'
const noteData = require('./notes.json')
// Intializing the app and set to value express()
const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Go to localhost:3001'));

app.get('/index', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api', (req, res) => res.json(noteData));


app.listen(PORT, () =>
  console.log(`Notes app listening at http://localhost:${PORT}`)
);
