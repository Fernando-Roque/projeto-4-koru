// c. Filtrar produtos da categoria "Eletrônicos" com preço < 1000
export function produtoEletronicoMenorQueMil() {
  const resultArea = document.querySelector('.result');
  resultArea.innerHTML = ""; // limpa conteúdo anterior

  const produtoEletronicoMenorQueMil = inventory.filter((produto) => produto.category == "Eletrônicos");

  produtoEletronicoMenorQueMil.forEach((item) => {
    if (item.price < 1000){
      const produtoHtml = `
      <div class="card">
        <strong>Produto: </strong> ${item.name}<br><br>
        <strong>Categoria: </strong> ${item.category}<br>
        <strong>Preço:</strong> R$ ${item.price},00<br>
        <strong>Estoque:</strong> ${item.stock} un
      </div>
    `
    resultArea.innerHTML += produtoHtml;
    }   
    
  })
}

document.addEventListener("DOMContentLoaded", function () {
  const botaoEletronico = document.querySelector("[data-action='eletronicos']");
  botaoEletronico.addEventListener('click', produtoEletronicoMenorQueMil);
})