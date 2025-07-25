// a. Mostrar uma lista formatada de todos os produtos usando forEach
export function exibirProdutosFormatados() {
  const resultArea = document.querySelector(".result");
  resultArea.innerHTML = ""; // Limpa conteúdo anterior

  inventory.forEach((item) => {
    const mediaAvaliacoes = (
      item.reviews.reduce((soma, nota) => soma + nota, 0) / item.reviews.length
    ).toFixed(1);

    const produtoHTML = `
      <div class="card">
        <strong>Produto:</strong> ${item.name}<br><br>
        <strong>Categoria:</strong> ${item.category}<br>
        <strong>Preço: R$</strong> ${item.price},00<br>
        <strong>Estoque:</strong> ${item.stock} un<br>
        <strong>Média de Avaliações:</strong> ${mediaAvaliacoes}
      </div>
    `;

    resultArea.innerHTML += produtoHTML;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const botaoFormatado = document.querySelector("[data-action='formatado']");
  botaoFormatado.addEventListener("click", exibirProdutosFormatados);
});