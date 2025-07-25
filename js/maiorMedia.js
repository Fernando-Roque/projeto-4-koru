// j. Encontrar o produto com a maior média de avaliações
export function maiorMediaAvaliacao () {
  const resultArea = document.querySelector(".result");
  resultArea.innerHTML = ""; // limpa conteúdo anterior

  let melhorProduto = null;
  let melhorMedia = 0;

  inventory.forEach((produto) => {
    const media = produto.reviews.reduce((acc, nota) => acc + nota, 0) / produto.reviews.length;

    if (media > melhorMedia){
      melhorMedia = media;
      melhorProduto = produto;
      melhorProduto.averageRating = media.toFixed(1);
    }
  })

  if (melhorProduto){
    const produtoHtml = `     
      <div class="card">
        <strong>${melhorProduto.name}</strong><br><br>     
        <strong>Categoria:</strong> ${melhorProduto.category}<br><br>  
        <strong>Media Avaliações:</strong> ${melhorProduto.averageRating}
      </div>
    `
    return resultArea.innerHTML = produtoHtml;

  } else {
    resultArea.innerHTML = `
      <div class="card">
        <strong>Não foi encontrado.</strong>
      </div>
    `;
  } 

}

document.addEventListener("DOMContentLoaded", function () {
  const botaoMaiorMedia = document.querySelector("[data-action='melhor']");
  botaoMaiorMedia.addEventListener("click", maiorMediaAvaliacao);
})