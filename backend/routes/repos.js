const express = require("express");

const RepoController = require("../controllers/repos");

const router = express.Router();

router.get("", RepoController.getRepos);

module.exports = router;
