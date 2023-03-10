const express = require("express");
const router = express.Router();
const jobsCtrl = require("../controllers/jobs");
const ensureAuth = require("../config/ensureAuth");

//GET /jobs
router.get("/", ensureAuth, jobsCtrl.index);

//GET /jobs/new
router.get("/new", ensureAuth, jobsCtrl.new);

//POST /jobs
router.post("/", ensureAuth, jobsCtrl.create);

//GET /jobs/:id
router.get("/:id", ensureAuth, jobsCtrl.show);

//GET /jobs/:id/edit
router.get("/:id/edit", ensureAuth, jobsCtrl.edit);

//PUT /jobs/:id
router.put("/:id", ensureAuth, jobsCtrl.update);

//DELETE /jobs/:id
router.delete("/:id", ensureAuth, jobsCtrl.delete);

module.exports = router;
