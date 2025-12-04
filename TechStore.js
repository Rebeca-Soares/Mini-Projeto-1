const inventario = [
    {   id: 1,
        categoria: 'Informatica',
        produto: 'Portatil', 
        preco: 700,
        quantidade: 10,
},
    {   id: 2,
        categoria: 'Fotografia',
        produto: 'Camera Instantanea', 
        preco: 180,
        quantidade: 3,
},
    {   id: 3,
        categoria: 'Som',
        produto: 'Auricular', 
        preco: 20,
        quantidade: 15,
},
    {   id: 4,
        categoria: 'Som',
        produto: 'Coluna de Som', 
        preco: 80,
        quantidade: 8,
},
    {   id: 5,
        categoria: 'Informatica',
        produto: 'Ipad', 
        preco: 900,
        quantidade: 1,
}];

console.log(inventario);

function atualizarPreco (id, preco){
    inventario.find (a => a.id === id)
}

console.log(atualizarPreco(5, 800));



