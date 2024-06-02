import showResults from "../view/viewHandler.js";
import axios from "axios";
import "regenerator-runtime/runtime";

async function pegarTodos() {
  await axios({
    method: "get",
    url: "http://localhost:3000/pessoas",
  }).then(async function (response) {
    await showResults(response, "result");
  });
}

async function alterarRegistro(data) {
  await axios.put("http://localhost:3000/pessoas", data).then(async () => {
    await pegarTodos();
  });
}

async function removerRegistro(id) {
  await axios
    .delete("http://localhost:3000/pessoas", { data: { id: id } })
    .then(async () => {
      await pegarTodos();
    });
}

async function addPessoa(data) {
  await axios.post("http://localhost:3000/pessoas", data).then(async () => {
    await pegarTodos();
  });
}

export default { pegarTodos, alterarRegistro, removerRegistro, addPessoa };
