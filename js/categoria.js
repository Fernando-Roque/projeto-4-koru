// g. Encontrar o primeiro produto da categoria "Vestuário"
export function primeiroProdutoVestuario() {
  const resultArea = document.querySelector(".result");
  resultArea.innerHTML = ""; // limpa conteudo anterior

  const primeiroProduto = inventory.find(item => item.category === "Vestuário");

  if (primeiroProduto){
    const produtoHtml = `
       <div class="card">
        <strong>Produto:</strong> ${primeiroProduto.name}<br><br>
        <strong>Categoria:</strong> ${primeiroProduto.category}<br>
        <strong>Preço:</strong> R$ ${primeiroProduto.price},00<br>
        <strong>Estoque:</strong> ${primeiroProduto.stock} un<br>
        
      </div>
      `
      return resultArea.innerHTML = produtoHtml;
  }  
  else {
    resultArea.innerHTML = `<div>Nenhum produto da categoria "Vestuário" foi encontrado.</div>`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const botaoPrimeiroProdutoVestuario = document.querySelector("[data-action='vestuario']");
  botaoPrimeiroProdutoVestuario.addEventListener('click', primeiroProdutoVestuario);
})