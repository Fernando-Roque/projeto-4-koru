// d. Verificar se há algum produto sem estoque
export function semEstoque() {
  const resultArea = document.querySelector(".result");
  resultArea.innerHTML = ""; // limpa conteúdo anterior

  const semEstoque = inventory.filter((item) => item.stock == 0);

  semEstoque.forEach((item) => {
    const produtoHtml = `
      <div class="card">
        <strong>Produto: </strong>${item.name}<br><br>
        <strong>Categoria:</strong> ${item.category}<br>
        <strong>Estoque:</strong>  ${item.stock} un
      </div>
    `

    resultArea.innerHTML += produtoHtml;
  })
}

document.addEventListener("DOMContentLoaded", function () {
  const botaoSemEstoque = document.querySelector("[data-action='semEstoque']");
  botaoSemEstoque.addEventListener('click', semEstoque);
})