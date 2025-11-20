let valorTotal
function adicionar(){
  
//Recupearar os valores do HTML
  let produto = document.getElementById("produto").value;
  let carrinho = document.getElementById("lista-produtos");
  let quantidade = document.getElementById("quantidade").value;
  //calcular os valore dos itens
  let itenProduto = produto.split('-')[0];
  let valorUnitario = produto.split('R$')[1];
  let preço = quantidade * valorUnitario;
  //Adicionar iten ao carrinho
 let quantidadu = document.querySelector("input")
 if(quantidade >= 0){
  carrinho.innerHTML = carrinho.innerHTML +  `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${itenProduto} <span class="texto-azul">R$${preço}</span>
        </section>`;
  //calcular total
  valorTotal = valorTotal + preço;
  let total = document.getElementById("valor-total");
  total.textContent = `${valorTotal}`;
 } else{
   alert("Selecione uma quantidade valida")
 }
}
  function limpar(){
    let produto = document.getElementById("produto").value;
    let carrinho = document.getElementById("lista-produtos");
    let quantidadu = document.querySelector("input");
    produto = "";
    quantidade.value = '';
   let itenProduto = produto.split('-')[0];
   let valorUnitario = produto.split('R$')[1];
   let preço = quantidade * valorUnitario;
   itenProduto = ``;
   preço = 0;
    carrinho.innerHTML =  ``;
        let total = document.getElementById("valor-total");
        total.textContent = `0`;
  }