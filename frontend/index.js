console.log("frontend");
import axios from "axios";
import "regenerator-runtime/runtime";

const getHelloWorld = document.getElementById("getHelloWorld");
getHelloWorld.addEventListener("click", () => {
  axios({
    method: "get",
    url: "http://localhost:3000/",
  }).then(function (response) {
    console.log(response)
    const result = (document.getElementById("result").innerHTML =
      response.data);
    console.log(result);
  });
});

const getAll = document.getElementById("getAll");
getAll.addEventListener("click", async () => {
  console.log("pegar todos");
  await pegarTodos();
});

async function pegarTodos() {
  console.log("teste");
  await axios({
    method: "get",
    url: "http://localhost:3000/pessoas",
  }).then(async function (response) {
    await showResults(response);
  });
}

async function showResults(response) {
    console.log(response)
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
    // onclick="alterarRegistro(${element.id})"
    resultString += linha;
  }
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").innerHTML = resultString;
  console.log(response);
  // const alterarPessoas = document.querySelectorAll(
  //   'button[id*="alterarRegistro"]'
  // );
  // for (let i = 0; i <= alterarPessoas.length; i++) {
  //   if (i == alterarPessoas.length) return;
  //   const element = alterarPessoas[i];
  //   console.log(element)
  //   const index = element.getAttribute('id').split('alterarRegistro')[1]
  //   console.log(index)
  //   element.addEventListener("click", async () => {
  //     console.log('alterar' + index)
  //     await alterarRegistro(index);
  //   });
  // }
  // const removerPessoas = document.querySelectorAll(
  //   'button[id*="removerRegistro"]'
  // );
  // console.log(removerPessoas)
  // for (let i = 0; i <= removerPessoas.length; i++) {
  //   if (i == removerPessoas.length) return;
  //   const element = removerPessoas[i];
  //   console.log(element);
  //   const index = element.getAttribute('id').split('alterarRegistro')[1]
  //   console.log(index)
  //   element.addEventListener("click", async() => {
  //     console.log("teste" + index);
  //     await removerRegistro(index)
  //   });
  // }
}
