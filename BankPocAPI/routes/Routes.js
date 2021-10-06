// Route.js file
const express = require("express")
const router = express.Router();
const fs = require('fs');
const accountRoutes = require('./transactions.js') // import account route
router.use(accountRoutes) // use account route
module.exports = router;