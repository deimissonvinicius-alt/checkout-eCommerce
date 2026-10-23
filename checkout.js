function calcularSubtotal (itens) {
   let total = 0;
   for (let item of itens) {
    total += (item * preço) * (item * quantidade)
   }
   
   return total
}
function contarItens(itens) {
 let totalItens = 0;
 for (let item of itens) {
    totalItens += item * quantidade;
 }
 return totalItens;
}
function aplicarCupom(subtotal, codigo){

  
}
function finalizarCompra(item,codigoCupom){

    return {subtotal : 0,desconto : 0,total : 0}
}
const item = [
    {nome: "camiseta", preço : 50, quantidade : 2},
    {nome: "tênis", preço : 150, quantidade : 1},
];
console.log(finalizarCompra(itens, "DESC10"));z