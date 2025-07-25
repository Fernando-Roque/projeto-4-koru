// h. Criar uma função de busca que retorna produtos cujo nome contenha um termo específico
const pesquisa = document.querySelector(".pesquisa");

 export function buscaProduto() {
  const resultArea = document.querySelector(".result");
  resultArea.innerHTML = ""; // limpa conteúdo anterior

  const palavraDigitada = inventory.filter((produto) => produto.name.toLowerCase() === pesquisa.value.toLowerCase());
  
  if (palavraDigitada.length > 0) {
    const produtoEncontrado = palavraDigitada[0];

    const produtoHtml = `
      <div class="card">
        <strong>Produto:</strong>${produtoEncontrado.name}<br><br>
        <strong>Categoria:</strong> ${produtoEncontrado.category}<br>
        <strong>Preço:</strong> R$ ${produtoEncontrado.price},00<br>
        <strong>Estoque:</strong> ${produtoEncontrado.stock} un<br>        
      </div>
    `
  return resultArea.innerHTML = produtoHtml;
  } else {
    resultArea.innerHTML = `
      <div>
        <strong><i>${pesquisa.value}</i> não foi encontrado.</strong>
      </div>
    `
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const botaoPesquisar = document.querySelector("[data-action='buscar']")
  botaoPesquisar.addEventListener('click', buscaProduto);
})
