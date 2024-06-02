export default async function showResults(data, elementId) {
  let resultString = "";
  for (let i = 0; i < data.data.length; i++) {
    const element = data.data[i];
    const linha = `
        <tr>
          <td>${element.id}</td>
          <td >${element.nome}</td>
          <td >${element.idade}</td>
          <td ><button id="alterarRegistro${element.id}"  type="button"
          class="btn btn-primary">Alterar</button></td>
          <td ><button id="removerRegistro${element.id}"  type="button"
          class="btn btn-danger">Remover</button></td>
        </tr>
        `;
    resultString += linha;
  }
  const stringFinal = `
  <table class="table table-striped table-sm">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nome</th>
        <th scope="col">Idade</th>
        <th scope="col" colspan="2">Ação</th>
      </tr>
    </thead>
    <tbody>
      ${resultString}
    </tbody>
  </table>
  `;
  document.getElementById(elementId).innerHTML = "";
  document.getElementById(elementId).innerHTML = stringFinal;
}


{/* <div>
<p>ID: ${element.id} - Nome: ${element.nome} e a sua idade é: ${element.idade}</p>
<button id="alterarRegistro${element.id}"  >Alterar</button>
<button id="removerRegistro${element.id}"  >Remover</button>
</div> */}