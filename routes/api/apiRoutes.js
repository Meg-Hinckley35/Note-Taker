// require express and scripts
const { notes } = require("../../db/db.json");
const { validateNote, createNewNote } = require("../../lib/notes");
const router = require("express").Router();

// Get all notes
router.get("/notes", (req, res) => {
    res.json(notes);
  });