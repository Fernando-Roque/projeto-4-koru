// b. Filtrar produtos que estão em estoque (stock > 0)
export function estoqueMaiorQueZero() {
  const resultArea = document.querySelector('.result');
  resultArea.innerHTML = ""; // limpa conteúdo anterior

  const estoquePositivo = inventory.filter((produto) => produto.stock > 0);
  
    estoquePositivo.forEach((item) => {
      const produtoHtml = `
        <div class="card">
          <strong>Produto: </strong> ${item.name}<br><br>
          <strong>Estoque:</strong> ${item.stock} un<br>
        </div>`;
      
      resultArea.innerHTML += produtoHtml;
    });
} 

document.addEventListener("DOMContentLoaded", function () {
  const botaoEstoqueMaiorQueZero = document.querySelector("[data-action='estoque']");
  botaoEstoqueMaiorQueZero.addEventListener("click", estoqueMaiorQueZero);
})