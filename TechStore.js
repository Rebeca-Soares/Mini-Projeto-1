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

// 1.
console.log("\n-1------");

function atualizarPreco(id, novoPreco) {
  const valor = inventario.find((produto) => produto.id === id);

  if (valor) {
    valor.preco = novoPreco;
    console.log(valor.produto, "novo preço: €", novoPreco);
  }
}

atualizarPreco(2, 900);

//2.
console.log("\n--2------");

let historicoVendas = [];

function registarVenda(estoque, nome) {

  const item = inventario.find(produto  => produto.produto === nome);
  
  if(estoque <= item.quantidade){

    let total = item.preco * estoque;

    let desconto = 0;

    if (total > 200){
      desconto = total * 0.10;
      total -= desconto;
    }

      item.quantidade -= estoque;

      console.log(`Produto Vendido: ${nome} - Qnt: ${estoque} UN - Desconto ${desconto} - Preço Total: ${total}.`);

      historicoVendas.push({produto: nome, quantidade: estoque, total, desconto});

  } else {
      console.log(nome, 'Sem Stock!');
  }
}

registarVenda(9, 'Portatil');
registarVenda(1, 'Ipad');
registarVenda(1, 'Coluna de Som');

console.log('--Hisrotico de vendas--');

historicoVendas.forEach(venda => {
  console.log(`Produto: ${venda.produto} - Qnt: ${venda.quantidade} - Total: €${venda.total.toFixed(2)} - Desconto Aplicado: €${venda.desconto.toFixed(2)}`);
});

//3.
console.log("\n--3------");
const totalInventario = inventario.reduce(
  (acc, n) => acc + n.preco * n.quantidade, 0);
console.log(`O total do inventário é: ${totalInventario.toFixed(2)} EUR`);
console.log(inventario);

//4.
console.log("\n--4------");

function limpezaStock() {
  for (let i = 0; i < inventario.length; ) {
    if (inventario[i].quantidade === 0) {
      inventario.splice(i, 1);
    } else {
      i++
    }
  }

  console.log("Inventário atualizado:", inventario);
}

limpezaStock();

//5. Filtro de Categoria
console.log("\n--5------");
const audio = inventario.filter((i) => i.categoria === "Som");
console.log(audio);

//6. Produto "Premium"
console.log("\n--6------");

function produtoPremium() {
  return inventario.reduce((produtoMaisCaro, produtoAtual) => {
    return produtoAtual.preco > produtoMaisCaro.preco ? produtoAtual : produtoMaisCaro;
  });
}

produtoPremium();

console.log(produtoPremium());

//7. Repor Stock
console.log("\n--7------");

function reporStock(nomeProduto, adicionarProduto) {
  const unidade = inventario.find((produto) => produto.produto === nomeProduto);

  if (unidade) {
    unidade.quantidade += adicionarProduto;
    console.log(`Produto: ${unidade.produto} -  Adicionado: ${adicionarProduto} - Total: ${unidade.quantidade}`);
  }
}

reporStock("Coluna de Som", 90);

//8. Listar Produtos
console.log("\n--8------");

function listarProdutos() {
  inventario.forEach((p) => console.log(`${p.produto} - quantidade: ${p.quantidade}`));
}

listarProdutos();

//9. Adicionar Produto Novo:
console.log("\n--9------");
inventario.push({
  id: 6,
  categoria: "Fotografia",
  produto: "Papel fotográfico",
  preco: 15,
  quantidade: 25,
});

console.log(inventario);

