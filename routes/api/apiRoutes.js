// require express and scripts
const { notes } = require("../../db/db.json");
const { validateNote, createNewNote } = require("../../lib/notes");
const router = require("express").Router();

