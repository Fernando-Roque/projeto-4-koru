
const inventory = [
  {
    id: 1,
    name: "Smartphone",
    price: 500,
    stock: 10,
    category: "Eletrônicos",
    reviews: [4, 5, 3, 5, 4],
  },
  {
    id: 2,
    name: "Notebook",
    price: 1200,
    stock: 5,
    category: "Eletrônicos",
    reviews: [5, 4, 5, 5, 3],
  },
  {
    id: 3,
    name: "Camiseta",
    price: 25,
    stock: 20,
    category: "Vestuário",
    reviews: [4, 3, 4, 5],
  },
  {
    id: 4,
    name: "Cafeteira",
    price: 100,
    stock: 8,
    category: "Cozinha",
    reviews: [3, 2, 5, 4, 2],
  },
  {
    id: 5,
    name: "Fones de Ouvido",
    price: 80,
    stock: 15,
    category: "Eletrônicos",
    reviews: [4, 4, 5, 5, 5, 4],
  },
  {
    id: 6,
    name: "Calça Jeans",
    price: 45,
    stock: 0,
    category: "Vestuário",
    reviews: [4, 3, 4],
  },
  {
    id: 7,
    name: "Liquidificador",
    price: 70,
    stock: 3,
    category: "Cozinha",
    reviews: [3, 4, 3, 5],
  },
];



// a. Mostrar uma lista formatada de todos os produtos usando forEach
function exibirProdutosFormatados() {
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

// b. Filtrar produtos que estão em estoque (stock > 0)
function estoqueMaiorQueZero() {
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

// c. Filtrar produtos da categoria "Eletrônicos" com preço < 1000
function produtoEletronicoMenorQueMil() {
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

// d. Verificar se há algum produto sem estoque
function semEstoque() {
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

// e. Verificar se todos os produtos têm pelo menos uma avaliação (review)
function avaliacao() {
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


// f. Encontrar o índice do produto "Cafeteira"
function indiceCafeteira() {
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


// g. Encontrar o primeiro produto da categoria "Vestuário"
function primeiroProdutoVestuario() {
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


// h. Criar uma função de busca que retorna produtos cujo nome contenha um termo específico
const pesquisa = document.querySelector(".pesquisa");

function buscaProduto() {
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

// i. Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"
function mediaAvaliacoes() {
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




// j. Encontrar o produto com a maior média de avaliações
function maiorMediaAvaliacao () {
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