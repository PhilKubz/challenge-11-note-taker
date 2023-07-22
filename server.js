const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'Develop', 'public')));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'Develop', 'public', 'index.html'))
);

app.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, 'Develop', 'public', 'notes.html'));
});

// API routes
app.get('/api/notes', function (req, res) {
  fs.readFile(path.join(__dirname, 'Develop', 'db', 'db.json'), 'utf8', function (err, data) {
    if (err) throw err;
    const notes = JSON.parse(data);
    res.json(notes);
  });
});

app.post('/api/notes', function (req, res) {
  fs.readFile(path.join(__dirname, 'Develop', 'db', 'db.json'), 'utf8', function (err, data) {
    if (err) throw err;
    const notes = JSON.parse(data);
    const newNote = req.body;
    newNote.id = uuidv4(); // Generate unique ID using uuid package
    notes.push(newNote);
    fs.writeFile(path.join(__dirname, 'Develop', 'db', 'db.json'), JSON.stringify(notes), function (err) {
      if (err) throw err;
      res.json(newNote);
    });
  });
});

// Port confirmation
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} `)
);
