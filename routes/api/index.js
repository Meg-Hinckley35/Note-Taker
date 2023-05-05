// require express router 
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// calling api routes to be used
router.use(apiRoutes);

module.exports = router;