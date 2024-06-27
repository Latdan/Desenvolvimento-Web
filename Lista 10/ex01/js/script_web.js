import { somar, subtrair, multiplicar, dividir } from './operacoes_web.js';

document.getElementById('somar').addEventListener('click', () => {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    alert(`Resultado: ${somar(n1, n2)}`);
});

document.getElementById('subtrair').addEventListener('click', () => {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    alert(`Resultado: ${subtrair(n1, n2)}`);
});

document.getElementById('multiplicar').addEventListener('click', () => {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    alert(`Resultado: ${multiplicar(n1, n2)}`);
});

document.getElementById('dividir').addEventListener('click', () => {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    alert(`Resultado: ${dividir(n1, n2)}`);
});