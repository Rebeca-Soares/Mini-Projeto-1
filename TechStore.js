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

function atualizarPreco(id, novoPreco) {
  const valor = inventario.find((produto) => produto.id === id);

  if (valor) {
    valor.preco = novoPreco;
    return valor;
  }

  return null
}

let historicoVendas = [];

function registarVenda(quantidadeEscolhida, nome) {

  const item = inventario.find(produto  => produto.produto === nome);

  if (!item) {
    console.log(nome, 'não encontrado no inventário!');
    return null;
  };
  
  if(quantidadeEscolhida <= item.quantidade){

    let total = item.preco * quantidadeEscolhida;

    let desconto = 0;

    if (total > 200){
      desconto = total * 0.10;
      total -= desconto;
    }

      item.quantidade -= quantidadeEscolhida;

      const venda = { produto: nome, quantidade: quantidadeEscolhida, total, desconto };
      historicoVendas.push(venda);

    return venda;

  } else {
      console.log(nome, 'Sem Stock!');
  }
}
function mostrarHistoricoVendas(){
  historicoVendas.forEach(venda => { console.log(`Produto: ${venda.produto} - Qnt: ${venda.quantidade} - Total: €${venda.total.toFixed(2)} - Desconto Aplicado: €${venda.desconto.toFixed(2)}`);
});
}

function totalInventario() {
  return inventario.reduce((acc, n) => acc + n.preco * n.quantidade, 0);
}

function limpezaStock() {
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].quantidade === 0) {
      inventario.splice(i, 1);
    } 
  }
  return inventario;
}

function filtrarCategoria (categoriaProduto){
    let cat = inventario.filter((i) => i.categoria=== categoriaProduto);
    return cat
}

function produtoPremium() {
  return inventario.reduce((produtoMaisCaro, produtoAtual) => {
    return produtoAtual.preco > produtoMaisCaro.preco ? produtoAtual : produtoMaisCaro;
  });
}

function reporStock(nomeProduto, adicionarProduto) {
  const unidade = inventario.find((produto) => produto.produto === nomeProduto);

  if (unidade) {
    unidade.quantidade += adicionarProduto;
    return unidade
  }
  return null
}

function listarProdutos() {
  const lista = [];
  inventario.forEach((p) => lista.push(`${p.produto} - quantidade: ${p.quantidade}`));
  return lista;
}

function main() {
  atualizarPreco(2, 900);
  registarVenda(9, "Portatil");
  registarVenda(1, "Ipad");
  registarVenda(1, "Coluna de Som");
  registarVenda(1, "Mouse");
  mostrarHistoricoVendas();
  produtoPremium();
  totalInventario();
  reporStock("Coluna de Som", 90);
  listarProdutos();
  limpezaStock();
  filtrarCategoria('Som');

  inventario.push({
    id: 6,
    categoria: "Fotografia",
    produto: "Papel fotográfico",
    preco: 15,
    quantidade: 25,
  });
}

main();

