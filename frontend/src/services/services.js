import showResults from "../view/viewHandler.js";
import axios from "axios";
import "regenerator-runtime/runtime";
const urlPadrao = "http://localhost:3000/pessoas"

async function pegarTodos() {
  await axios({
    method: "get",
    url: urlPadrao,
  }).then(async function (response) {
    await showResults(response, "result");
  });
}

async function alterarRegistro(data) {
  await axios.put(urlPadrao, data).then(async () => {
    await pegarTodos();
  });
}

async function removerRegistro(id) {
  await axios
    .delete(urlPadrao, { data: { id: id } })
    .then(async () => {
      await pegarTodos();
    });
}

async function addPessoa(data) {
  await axios.post(urlPadrao, data).then(async () => {
    await pegarTodos();
  });
}

export default { pegarTodos, alterarRegistro, removerRegistro, addPessoa };
