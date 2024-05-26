const { Router } = require("express");
const { findAll } = require("../services/service.js");

const router = Router();

router.get("/", async (req, res) => {
  res.send(await findAll());
});

module.exports = router;
