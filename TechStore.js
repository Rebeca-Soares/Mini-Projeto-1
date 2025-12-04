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


console.log("-------");
const totalInventario = inventario.reduce(
  (acc, n) => acc + n.preco * n.quantidade,
  0
);
console.log(`O total do inventário é: ${totalInventario.toFixed(2)} EUR`);

console.log("-------");


console.log("-------");

//5. Filtro de Categoria
const audio = inventario.filter(i => i.categoria === "Som")
console.log(audio);

//6. Produto "Premium"
const premium = inventario.forEach (i => i.preco > )