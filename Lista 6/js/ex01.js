const pix = {
    chavePix: "11975843657",
    valorTransferencia: 500.00,
    dataTransacao: "2024-05-20T14:00:00",
    descricaoPagamento: "Pagamento referente a obra",
    pagador: {
        nome: "Gabriel Latiman",
        documento: "845.504.754-03"
    },
    recebedor: {
        nome: "Estevao Oliveira",
        documento: "748.403.784-65"
    },
    historicoTransacoes: [
        {
            data: "2024-05-20T10:30:00",
            valor: 100.00,
            descricao: "Loja de eletrônicos"
        },
        {
            data: "2024-04-15T16:45:00",
            valor: 150.00,
            descricao: "Serviços Diversos"
        },
        {
            data: "2024-04-19T16:45:00",
            valor: 300.00,
            descricao: "Mercado"
        }
    ]
};

function displayDetalhesTransacao() {
    const detailsDiv = document.getElementById("detalhesTransacao");

    let htmlContent = `
        <p><strong>Chave PIX:</strong> ${pix.chavePix}</p>
        <p><strong>Valor da Transferência:</strong> R$ ${pix.valorTransferencia.toFixed(2)}</p>
        <p><strong>Data da Transação:</strong> ${new Date(pix.dataTransacao).toLocaleString()}</p>
        <p><strong>Descrição do Pagamento:</strong> ${pix.descricaoPagamento}</p>
        <h3>Pagador:</h3>
        <p><strong>Nome:</strong> ${pix.pagador.nome}</p>
        <p><strong>Documento:</strong> ${pix.pagador.documento}</p>
        <h3>Recebedor:</h3>
        <p><strong>Nome:</strong> ${pix.recebedor.nome}</p>
        <p><strong>Documento:</strong> ${pix.recebedor.documento}</p>
        <h3>Histórico de Transações:</h3>
        <ul>
    `;

    pix.historicoTransacoes.forEach(transacao => {
        htmlContent += `
            <li>
                <p><strong>Data:</strong> ${new Date(transacao.data).toLocaleString()}</p>
                <p><strong>Valor:</strong> R$ ${transacao.valor.toFixed(2)}</p>
                <p><strong>Descrição:</strong> ${transacao.descricao}</p>
            </li>
        `;
    });

    htmlContent += `</ul>`;
    detailsDiv.innerHTML = htmlContent;
}

displayDetalhesTransacao();
