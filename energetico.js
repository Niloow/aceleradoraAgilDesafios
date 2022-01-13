const valorUnitario = 4.5;
let quantidade = 350;

const icms = 18 / 100; // ICMS: 18%;
const ipi = 4 / 100; // IPI: 4%;
const pis = 1.86 / 100; //PIS: 1,86%;
const cofins = 8.54 / 100; // COFINS: 8,54%;

function valorTotal() {
  let valorTotal = valorUnitario * quantidade;
  console.log(`Valor total da compra é de R$ ${valorTotal}`);
  let valorIcms = valorTotal * icms;
  console.log(`Tarifa ICMS R$ ${valorIcms}`);

  let valorIpi = valorTotal * ipi;
  console.log(`Tarifa IPI R$: ${valorIpi}`);

  let valorPis = valorTotal * pis;
  console.log(`Tarifa PIS R$: ${valorPis}`);

  let valorCofins = valorTotal * cofins;
  console.log(`Tarifa CONFINS R$: ${valorCofins}`);

  let totalImpost = valorIcms + valorIpi + valorPis + valorCofins;
  console.log(`O Valor total em impostos a serem pagos é de ${totalImpost}`);

  let ValorTotalComImpostos =
    valorTotal + valorIcms + valorIpi + valorPis + valorCofins;
  console.log(
    `Valor total a pagar pelo estabelecimento é de R$: ${ValorTotalComImpostos}`
  );
}

valorTotal();
