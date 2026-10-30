function calcularSubtotal(itens) {
    let subtotal = 0;
    for (const item of itens) {
      subtotal += item.preco * item.quantidade;
    }
    return subtotal;
  }
  
  function contarItens(itens) {
    let total = 0;
    for (const item of itens) {
      total += item.quantidade;
    }
    return total;
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