import axios from "axios";
import "regenerator-runtime/runtime";


const getAll = document.getElementById("getAll");
getAll.addEventListener("click", async () => {
  await pegarTodos();
});

async function pegarTodos() {
  await axios({
    method: "get",
    url: "http://localhost:3000/pessoas",
  }).then(async function (response) {
    await showResults(response);
  });
}

async function showResults(response) {
  console.log(response);
  let resultString = "";
  for (let i = 0; i < response.data.length; i++) {
    const element = response.data[i];
    const linha = `
      <div>
        <p>ID: ${element.id} - Nome: ${element.nome} e a sua idade é: ${element.idade}</p>
        <button id="alterarRegistro${element.id}"  >Alterar</button>
        <button id="removerRegistro${element.id}"  >Remover</button>
      </div>
      `;
    resultString += linha;
  }
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").innerHTML = resultString;
}

document.addEventListener("click", async function (event) {
  if (String(event.target.id).includes("alterarRegistro")) {
    const index = event.target.id.split("alterarRegistro")[1];
    console.log(index);
    await alterarRegistro(index);
  }
  if (String(event.target.id).includes("removerRegistro")) {
    const index = event.target.id.split("removerRegistro")[1];
    console.log(index);
    await removerRegistro(index);
  }
});

async function removerRegistro(id) {
  console.log("remover teste" + id);
  await axios
    .delete("http://localhost:3000/pessoas", { data: { id: id } })
    .then(async () => {
      await pegarTodos();
    });
}

async function alterarRegistro(id) {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const pessoa = {
    nome: nome,
    idade: idade,
    id,
  };
  await axios.put("http://localhost:3000/pessoas", pessoa).then(async () => {
    await pegarTodos();
  });
}

const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const pessoa = { nome, idade };
  await addPessoa(pessoa);
});

async function addPessoa(data) {
  await axios.post("http://localhost:3000/pessoas", data).then(async () => {
    await pegarTodos();
  });
}
