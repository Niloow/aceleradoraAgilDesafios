const valorUnitario = 4.5;
let quantidade = 350;

// const icms = 0.18;  ICMS: 18%;
// const ipi = 0.04; // IPI: 4%;
const pis = 0.0186; //PIS: 1,86%;
const cofins = 0.0854; // COFINS: 8,54%;

// Realizar o mais simples primeiro!!!!!
// Realizar o mais simples primeiro!!!!!
// Realizar o mais simples primeiro!!!!!
// Realizar o mais simples primeiro!!!!!
// Realizar o mais simples primeiro!!!!!
// Realizar o mais simples primeiro!!!!!
// Realizar o mais simples primeiro!!!!!

//INSERÇÃO DE DADOS
// estabelecimento + qtd;
// do while
// if Else
// for

//Calcular Valor do pedido
function calcularValorDoPedido(valorUnitario, quantidade) {
  let valorTotalPedido = valorUnitario * quantidade;
  return valorTotalPedido.toFixed(2);
}

console.log(
  `O valor TOTAL do pedido é:${calcularValorDoPedido(
    valorUnitario,
    quantidade
  )}`
);

function icms() {
  let valorIcms = calcularValorDoPedido(valorUnitario, quantidade) * 0.18;
  return valorIcms.toFixed(2);
}

function ipi() {
  let valorIpi = calcularValorDoPedido(valorUnitario, quantidade) * 0.04;
  return valorIpi.toFixed(2);
}

console.log(icms());
console.log(ipi());

//   let valorIpi = calcularValorDoPedido(valorUnitario, quantidade) * ipi;
//   console.log(`Tarifa IPI: R$${valorIpi.toFixed(2)}`);

//   let valorPis = calcularValorDoPedido(valorUnitario, quantidade) * pis;
//   console.log(`Tarifa PIS: R$ ${valorPis.toFixed(2)}`);

//   let valorCofins = calcularValorDoPedido(valorUnitario, quantidade) * cofins;
//   console.log(`Tarifa CONFINS: R$ ${valorCofins.toFixed(2)}`);

// }

// console.log(
//   `Valor total do pedido é: R$ ${calcularValorDoPedido(
//     valorUnitario,
//     quantidade
//   )}`
// );

calcularValorDoPedido(valorUnitario, quantidade);
icms();
