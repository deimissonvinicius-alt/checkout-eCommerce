function calcularSubtotal (itens) {
   
}
function contarItens(itens) {

}

function aplicarCupom(subtotal, codigo) {
  if (codigo === "DESC10") {
    return 0.9;
  } else if (codigo === "DESC20" && subtotal >= 200) {
    return 0.8;
  } else if (codigo === "FRETEGRATIS") {
    return -15;
  }
  return 1;
}

function finalizarCompra(itens, codigoCupom) {
  const subtotal = calcularSubtotal(itens);
  const desconto = aplicarCupom(subtotal, codigoCupom);

  let total;
  if (desconto === -15) {
    total = subtotal - 15;
  } else {
    total = subtotal * desconto;
  }

  return {
    subtotal,
    desconto,
    totalItens: contarItens(itens),
    total,
  };
}

const itens = [
  { nome: "camiseta", preço: 50, quantidade: 2 },
  { nome: "tênis", preço: 150, quantidade: 1 },
];

console.log(finalizarCompra(itens, "DESC10"));
// { subtotal: 250, desconto: 0.9, totalItens: 3, total: 225 }


