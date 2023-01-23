const express = require("express");
const router = express.Router();
const eventsCtrl = require("../controllers/events");
const ensureAuth = require("../config/ensureAuth");

// POST /jobs/events
router.post("/:id/events", ensureAuth, eventsCtrl.create);

module.exports = router;
