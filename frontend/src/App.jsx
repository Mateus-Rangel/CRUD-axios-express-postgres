import React from "react";
// import { useState } from "react";
import Table from "./Table";

import "./App.css";

const DATA = [
  { id: 1, nome: "Mateus Rangel", idade: 30 },
  { id: 2, nome: "Carol Rangel", idade: 38 },
  { id: 3, nome: "Guilherme Rangel", idade: 65 },
  { id: 4, nome: "Maria de Fátima Rangel", idade: 65 },
];

function App() {
  return <Table data={DATA}></Table>;
}

export default App;
