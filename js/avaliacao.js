// e. Verificar se todos os produtos têm pelo menos uma avaliação (review)
export function avaliacao() {
  const resultArea = document.querySelector(".result");
  resultArea.innerHTML = ""; // limpar o conteúdo anterior

  const avaliacao = inventory.filter((produto) => produto.reviews.length > 0);  

  avaliacao.forEach((item) => {
    const mediaAvaliacoes = (item.reviews.reduce((acc, nota) => acc + nota) / avaliacao.length).toFixed(1);
    const produtoHtml = `
      <div class="card">
        <strong>Produto:</strong> ${item.name}<br>        
        <strong>Avaliações:</strong> ${mediaAvaliacoes}
      </div>
    `   
    resultArea.innerHTML += produtoHtml; 
  })  
}

document.addEventListener("DOMContentLoaded", function () {
  const botaoAvaliacao = document.querySelector("[data-action='avaliacoes']");
  botaoAvaliacao.addEventListener('click', avaliacao);
})