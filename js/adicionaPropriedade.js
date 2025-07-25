// i. Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"
export function mediaAvaliacoes() {
  const resultArea = document.querySelector(".result");
  resultArea.innerHTML = ""; // limpa conteudo anterior

  const produtoAvaliado = inventory.filter((item) => item.reviews.length > 0);

  produtoAvaliado.forEach((produto) => {
    const mediaAvaliacoes = produto.reviews.reduce((acc, nota) => acc + nota, 0) / produto.reviews.length;
    produto.averageRating = mediaAvaliacoes.toFixed(1);

    const produtoHtml = `
      <div class="card">
        <strong>Produto:</strong> ${produto.name}<br><br>       
        <strong>Media Avaliações:</strong> ${produto.averageRating}
      </div>
    `

    return resultArea.innerHTML += produtoHtml;
  })  
}

document.addEventListener("DOMContentLoaded", function () {
  const botaoMedia = document.querySelector("[data-action='media']");
  botaoMedia.addEventListener('click', mediaAvaliacoes);
})

