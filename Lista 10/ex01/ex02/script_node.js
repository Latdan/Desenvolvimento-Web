const { somar, subtrair, multiplicar, dividir } = require('./operacoes_node.js');

const n1 = parseFloat(process.argv[2]);
const n2 = parseFloat(process.argv[3]);

console.log(`Somar: ${somar(n1, n2)}`);
console.log(`Subtrair: ${subtrair(n1, n2)}`);
console.log(`Multiplicar: ${multiplicar(n1, n2)}`);
console.log(`Dividir: ${dividir(n1, n2)}`);