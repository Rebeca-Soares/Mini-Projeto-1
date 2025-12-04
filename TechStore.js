const { isValidElement } = require("react");

const inventario = [
  {
    id: 1,
    categoria: "Informatica",
    produto: "Portatil",
    preco: 700,
    quantidade: 10,
  },
  {
    id: 2,
    categoria: "Fotografia",
    produto: "Camera Instantanea",
    preco: 180,
    quantidade: 3,
  },
  { id: 3, categoria: "Som", produto: "Auricular", preco: 20, quantidade: 15 },
  {
    id: 4,
    categoria: "Som",
    produto: "Coluna de Som",
    preco: 80,
    quantidade: 8,
  },
  {
    id: 5,
    categoria: "Informatica",
    produto: "Ipad",
    preco: 900,
    quantidade: 1,
  },
];
console.log(inventario);

console.log("-------");
/* function atualizarPreco(id, novoPreco) {
  inventario.find((a) => a.id === id);
  inventario.preco = novoPreco;

  return inventario;
}
 */
console.log(atualizarPreco(5, 800));

console.log("-------");

console.log("-------");

const totalInventario = inventario.reduce((acc, n) => acc + n.preco, 0);
console.log(totalInventario);
