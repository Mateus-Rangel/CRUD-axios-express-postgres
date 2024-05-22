const { Router } = require("express");
const { findAll } = require("../services/service.js");

const router = Router();

router.get("/", async (req, res) => {
    console.log('teste router get')
  console.log(res);
  res.send(await findAll());
});

module.exports = router;
