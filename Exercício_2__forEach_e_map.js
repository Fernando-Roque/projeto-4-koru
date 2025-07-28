// Lista de produtos com nome, preço e categoria
const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];

// 1. Mostrar todos os produtos usando forEach
console.log("ex.1 Lista de Produtos:");
products.forEach(function (produto, indice) {
  // Mostra o número do item (por isso somamos +1 ao índice) e o nome e preço
  console.log(indice + 1 + ". " + produto.name + " - R$" + produto.price);
});

// 2. Criar uma nova lista com só os nomes dos produtos usando map
const nomesDosProdutos = products.map(function (produto) {
  return produto.name;
});
console.log("ex.2 Nomes dos Produtos:");
console.log(nomesDosProdutos);

// 3. Criar nova lista com produtos com 10% de desconto
const produtosComDesconto = products.map(function (produto) {
  // Calcula o novo preço com desconto de 10%
  let precoComDesconto = produto.price * 0.9;

  // Retorna um novo produto com o mesmo nome, id, categoria e o novo preço
  return {
    id: produto.id,
    name: produto.name,
    category: produto.category,
    price: precoComDesconto,
  };
});

// Mostrar produtos com o preço original e com desconto
console.log("ex.3 = Produtos com 10% de desconto:");
produtosComDesconto.forEach(function (produto) {
  // Para mostrar o preço original, dividimos por 0.9
  let precoOriginal = produto.price / 0.9;

  // Mostrar os dois preços, com duas casas decimais
  console.log(
    produto.name +
      " - Original: R$" +
      precoOriginal.toFixed(2) +
      ", Com desconto: R$" +
      produto.price.toFixed(2)
  );
});

// Desafios

// a-Use map para criar um array de strings formatadas como "Nome do produto - Categoria" para cada produto

const nomesCategorias = products.map(function (produto) {
  return produto.name + " - " + produto.category;
});

console.log("D.a Nome do produto - Categoria:");
console.log(nomesCategorias);

// b- Use map para criar um array com os preços de todos os produtos com impostos (15% a mais)

const precosComImposto = products.map(function (produto) {
  return (produto.price * 1.15).toFixed(2); // toFixed para duas casas decimais
});

console.log("D.b Preços com 15% de imposto:");
console.log(precosComImposto);

// c. Combine forEach com um acumulador externo para calcular o valor total de todos os produtos
// ----------------------

let total = 0;

products.forEach(function (produto) {
  total += produto.price; // vai somando os preços
});

console.log("D.c Valor total dos produtos: R$" + total.toFixed(2));
