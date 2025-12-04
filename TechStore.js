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
// 1.

function atualizarPreco(id, novoPreco) {

  const valor = inventario.find(produto  => produto.id === id)
  
  if(valor){
      valor.preco = novoPreco
      console.log(valor.produto, 'novo preço:', novoPreco)
  }
}

atualizarPreco(2, 900)

console.log("-------");
//2. 

const totalInventario = inventario.reduce(
  (acc, n) => acc + n.preco * n.quantidade,
  0
);
console.log(`O total do inventário é: ${totalInventario.toFixed(2)} EUR`);
console.log(inventario);

console.log("-------");
//3.

function registarVenda(estoque, nome) {

  const item = inventario.find(produto  => produto.produto === nome)
  
  if(estoque <= item.quantidade){
      item.quantidade -= estoque
      console.log(`Produto: ${nome} Qnt: ${estoque} UN - Vendido.`)
  } else {
      console.log(nome, 'Quantidade insuficiente!');
  }
}

registarVenda(9, 'Portatil')
registarVenda(1, 'Ipad')
registarVenda(1, 'Coluna de Som')

console.log("-------");
//4.

function limpezaStock() {
  for (let i = 0; i < inventario.length; ) {
    if (inventario[i].quantidade === 0) {
      inventario.splice(i, 1);
    } else {
      i++;
    }
  }

  console.log('Inventário atualizado:', inventario);
}

limpezaStock();

console.log("-------");

//5. Filtro de Categoria
const audio = inventario.filter(i => i.categoria === "Som")
console.log(audio);

//6. Produto "Premium"
/* const premium = inventario.forEach (i => i.preco >) */

//9. Adicionar Produto Novo:
console.log("-9------");
inventario.push({
  id: 6,
  categoria: "Fotografia",
  produto: "Papel fotográfico",
  preco: 15,
  quantidade: 25,
});

console.log(inventario);