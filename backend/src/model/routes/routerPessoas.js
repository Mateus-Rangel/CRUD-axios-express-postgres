const { Router } = require("express");
const { findAll, updatePerson, addPerson, deletePerson } = require("../services/service.js");

const router = Router();

router.get("/", async (req, res) => {
  res.send(await findAll());
});

router.post("/", async (req, res) => {
  await addPerson(req.body);
  res.send(await findAll());
});

router.put("/", async (req, res) => {
  await updatePerson(req.body);
  res.send(await findAll());
});

router.delete("/", async (req, res) => {
  await deletePerson(req.body);
  res.send(await findAll());
});

module.exports = router;
