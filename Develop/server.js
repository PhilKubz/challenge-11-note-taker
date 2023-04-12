const express = require('express');
const path = require('path');
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const PORT = process.env.PORT || 3001;

//app method for express
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static directory to be served
app.use(express.static(path.join(__dirname, 'public')));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// HTML routes
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// API routes
app.get("/api/notes", function(req, res) {
  fs.readFile("./db/db.json", "utf8", function(err, data) {
    if (err) throw err;
    const notes = JSON.parse(data);
    res.json(notes);
  });
});

app.post("/api/notes", function(req, res) {
  fs.readFile("./db/db.json", "utf8", function(err, data) {
    if (err) throw err;
    const notes = JSON.parse(data);
    const newNote = req.body;
    newNote.id = uuidv4(); // Generate unique ID using uuid package
    notes.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(notes), function(err) {
      if (err) throw err;
      res.json(newNote);
    });
  });
});

//Port confirmation
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} `)
);