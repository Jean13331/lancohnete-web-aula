const cardapio = [
    { nome: "X-Burguer", preco: 18.90, categoria: "Lanches" },
    { nome: "X-Bacon", preco: 21.90, categoria: "Lanches" },
    { nome: "Combo Família", preco: 45.90, categoria: "Combos" },
    { nome: "Milkshake 500ml", preco: 10.90, categoria: "Bebidas" },
    { nome: "Batata Frita M", preco: 8.90, categoria: "Acompanhamentos" }
];

function exibirCardapio() {
    cardapio.forEach(item => {
        console.log(`${item.nome} - R$ ${item.preco} (${item.categoria})`);
    });
}

exibirCardapio();
function filtrarPorCategoria(categoria) {
    return cardapio.filter(item => item.categoria === categoria);
}

console.log("Lanches:", filtrarPorCategoria("Lanches"));