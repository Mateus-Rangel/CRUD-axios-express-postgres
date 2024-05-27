import axios from "axios";
import "regenerator-runtime/runtime";
import showResults from "../view/viewHandler.js";
import inputs from "../view/inputHandler.js";

const getAll = document.getElementById("getAll");
getAll.addEventListener("click", async () => {
  await pegarTodos();
});

async function pegarTodos() {
  await axios({
    method: "get",
    url: "http://localhost:3000/pessoas",
  }).then(async function (response) {
    await showResults(response, "result");
  });
}

document.addEventListener("click", async function (event) {
  if (String(event.target.id).includes("alterarRegistro")) {
    const index = event.target.id.split("alterarRegistro")[1];
    await alterarRegistro(index);
  }
  if (String(event.target.id).includes("removerRegistro")) {
    const index = event.target.id.split("removerRegistro")[1];
    await removerRegistro(index);
  }
});

async function removerRegistro(id) {
  await axios
    .delete("http://localhost:3000/pessoas", { data: { id: id } })
    .then(async () => {
      await pegarTodos();
    });
}

async function alterarRegistro(id) {
  const input = new inputs();
  const pessoa = {
    nome: input.nome,
    idade: input.idade,
    id,
  };
  await axios.put("http://localhost:3000/pessoas", pessoa).then(async () => {
    await pegarTodos();
  });
}

const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = new inputs();
  const pessoa = { nome: input.nome, idade: input.idade };
  await addPessoa(pessoa);
});

async function addPessoa(data) {
  await axios.post("http://localhost:3000/pessoas", data).then(async () => {
    await pegarTodos();
  });
}
