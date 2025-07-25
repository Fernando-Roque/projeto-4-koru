// f. Encontrar o índice do produto "Cafeteira"
export function indiceCafeteira() {
  const resultArea = document.querySelector(".result");
  resultArea.innerHTML = ""; // limpa o conteudo anterior

  const indice = inventory.findIndex((item) => item.name === "Cafeteira") ;  

  if (indice !== -1) {
    const produto = inventory[indice];

     return resultArea.innerHTML = `
      <div class="card">
        <strong>Produto:</strong> ${produto.name}<br><br>        
        <strong>Está no indice:</strong> ${indice}
      </div>
  `
  }
  else {
    resultArea.innerHTML = `
      <div>
        <strong>Produto não Encontrado</strong><br>               
      </div>
  `
  }    

 
}

document.addEventListener("DOMContentLoaded", function () {
  const botaoIndice = document.querySelector("[data-action='cafeteira']");
  botaoIndice.addEventListener('click', indiceCafeteira);
})