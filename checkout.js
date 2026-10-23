function calcularSubtotal (itens) {
   
}
function contarItens(itens) {

}
function aplicarCupom(subtotal, codigo){
    if(codigo === "DESC10"){
        desconto = 0.9
    }else if(codigo === "DESC20" && subtotal >= 200){
        desconto = 0.8
    }else if(codigo === "FRETEGRATIS"){
        desconto = -15
    }else{
        desconto = 1
    }
}
//.

function finalizarCompra(item,codigoCupom){
    if(desconto === -15){
        subtotal - 15
    }else {
    calcularSubtotal * desconto
}
    return {subtotal : 0,desconto : 0,total : 0}
}
const item = [
    {nome: "camiseta", preço : 50, quantidade : 2},
    {nome: "tênis", preço : 150, quantidade : 1},
];
console.log(finalizarCompra(itens, "DESC10"));