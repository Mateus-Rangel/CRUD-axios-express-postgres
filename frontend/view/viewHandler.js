export default async function showResults(data, elementId) {
  let resultString = "";
  for (let i = 0; i < data.data.length; i++) {
    const element = data.data[i];
    const linha = `
        <div>
          <p>ID: ${element.id} - Nome: ${element.nome} e a sua idade é: ${element.idade}</p>
          <button id="alterarRegistro${element.id}"  >Alterar</button>
          <button id="removerRegistro${element.id}"  >Remover</button>
        </div>
        `;
    resultString += linha;
  }
  document.getElementById(elementId).innerHTML = "";
  document.getElementById(elementId).innerHTML = resultString;
}
