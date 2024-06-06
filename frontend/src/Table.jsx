import React from "react";

export default function Table({ data }) {
  const listPessoas = data.map((pessoa) => (
    <li key={pessoa.id}>
      <p>
        ID: {pessoa.id}, Nome: {pessoa.nome}, Idade: {pessoa.idade}
      </p>
    </li>
  ));
  return (
    <>
      <ul>{listPessoas}</ul>
    </>
  );
}
