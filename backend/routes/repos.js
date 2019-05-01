const express = require("express");

const RepoController = require("../controllers/repos");

const router = express.Router();

router.get("", RepoController.getRepos);
router.get("/details/:repo", RepoController.getRepoReadme);
router.get("/commits/:repo", RepoController.getCommits);

module.exports = router;
