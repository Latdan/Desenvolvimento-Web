document.getElementById('calcular').addEventListener('click', function() {
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    if (isNaN(salarioBruto) || salarioBruto <= 0) {
        document.getElementById('resultado').textContent = 'Por favor, insira um salário bruto válido.';
        document.getElementById('salarioLiquido').textContent = '';
    } else {
        const valorIR = salarioBruto * 15 / 100;
        const salarioLiquido = salarioBruto - valorIR;
        document.getElementById('resultado').textContent = `O valor do Imposto de Renda é: R$ ${valorIR.toFixed(2)}`;
        document.getElementById('salarioLiquido').textContent = `O salário líquido é: R$ ${salarioLiquido.toFixed(2)}`;
    }
});