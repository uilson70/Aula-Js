//Use o array carrinho que você já criou.
//Use .map() para calcular o subtotal de cada produto (preco × quantidade)
//Use .reduce() para somar todos os subtotais
//Imprima o total final
 let carrinho = [
    { nome: "Notebook", preco: 3000, quantidade: 1 },
    { nome: "celular", preco: 2000, quantidade: 5 },
    { nome: "impressora", preco: 5000, quantidade: 2 },
];

// 1. Listar produtos
function listarProdutos() {
    carrinho.forEach(function(produto) {
        console.log(produto.nome + " - R$ " + produto.preco);
    });
}

// 2. Calcular total
function calcularTotal() {
    let subtotais = carrinho.map(function(produto) {
        return produto.preco * produto.quantidade;
    });
    let total = subtotais.reduce(function(acumulado, subtotal) {
        return acumulado + subtotal;
    });
    return total;
}

// 3. Adicionar produto
function adicionarProduto(nome, preco, quantidade) {
    carrinho.push({
        nome: nome,
        preco: preco,
        quantidade: quantidade
    });
}

// 4. Remover produto
function removerProduto(nomeProduto) {
    carrinho = carrinho.filter(function(produto) {
        return produto.nome !== nomeProduto;
    });
}

// 5. Aplicar desconto
function aplicarDesconto(total, porcentagem) {
    let valorDesconto = total * porcentagem / 100;
    let descontoTotal = total - valorDesconto;
    return descontoTotal;
}

// 6. Filtrar por preço
function filtrarPorPreco(precoMaximo) {
    return carrinho.filter(function(produto) {
        return produto.preco <= precoMaximo;
    });
}

// TESTES:
console.log("=== CARRINHO COMPLETO ===");
listarProdutos();
console.log("Total: R$ " + calcularTotal());
console.log("Com 10% desconto: R$ " + aplicarDesconto(calcularTotal(), 10));
console.log("Produtos até R$ 3000:", filtrarPorPreco(3000));