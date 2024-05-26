const express = require("express");
const cors = require("cors");
const routerPessoa = require("./src/model/routes/routerPessoas.js");
const service = require("./src/model/services/service.js");

const app = express();
const PORT = 3000;
app.use(cors());
app.use("/pessoas", routerPessoa);
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// app.get("/", (req, res) =>{
//   console.log("teste router get");
//   console.log(res);
//   res.send(`Hello world`);
// });

// app.get("/pessoas", async function(req, res) {
//   console.log("teste router get");
//   console.log(res);
//   res.send(await service.findAll());
// });

app.listen(PORT, () => {
  console.log(`Servidor online na porta: ${PORT}`);
});

module.exports = app;
