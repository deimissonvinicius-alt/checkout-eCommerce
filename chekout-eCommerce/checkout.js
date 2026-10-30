function calcularSubtotal(itens) {
  let subtotal = 0;
  for (let item of itens) {
    subtotal += item.preço * item.quantidade;
  }
  return subtotal;
}

function contarItens(itens) {
  let totalItens = 0;
  for (let item of itens) {
    totalItens += item.quantidade;
  }
  return totalItens;
}
function aplicarCupom(subtotal, codigo){

}
function finalizarCompra(item,codigoCupom){

}
const item = [
    {nome: "camiseta", preço : 50, quantidade : 2},
    {nome: "tênis", preço : 150, quantidade : 1},
];
console.log(finalizarCompra(itens, "DESC10"));
