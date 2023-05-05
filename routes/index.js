// require express router and path
const path = require("path");
const router = require("express").Router();

// set routes to HTML files
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  
  module.exports = router;