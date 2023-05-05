// require fs and path
const fs = require("fs")
const path = require("path")

// function to validate a note has text
function validateNote(note) {
    if (!note.title || typeof note.title !== "string") {
      return false;
    }
    if (!note.text || typeof note.text !== "string") {
      return false;
    }
    return true;
  }

  // function to add a new note
  function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, "./db/db.json"),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
  }

  //export functions
  module.exports = { validateNote, createNewNote };  