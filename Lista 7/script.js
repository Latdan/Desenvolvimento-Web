document.addEventListener("DOMContentLoaded", function() {
    const produtos = [
        {
            nome: "PC Gamer",
            descricao: "Pc gamer com RTX 3070 ti, ryzen 5 5600x, SSD 2TB, DDR4 16GB, Fonte 600W, Cooler Black RGB.",
            imagem: "https://media.istockphoto.com/id/1273399636/pt/foto/computer-with-internal-led-rgb-lights-and-cpu-cooling-fans-hardware-inside-open-high.jpg?s=2048x2048&w=is&k=20&c=R0qka8-AJGWRDzL0WqAP4GKADNfv9gmSRZkDMDbe1y4=",
            valor: "R$ 6000,00"
        },
        {
            nome: "Monitor 240hz",
            descricao: "Monitor Samsung 240hz curvo com 0,5ms de resposta.",
            imagem: "https://media.istockphoto.com/id/1339094225/pt/foto/gaming-pc-setup-at-home-with-a-big-computer-screen-showing-a-video-game.jpg?s=2048x2048&w=is&k=20&c=uakoH4sCnGH-xDvx8KKnTNpP3y2dMVDtWVsr1QJBriY=",
            valor: "R$ 2200,00"
        },
        {
            nome: "KIT Gamer",
            descricao: "Kit gamer que acompanha mousepad RGB, Headset gamer, Controle, Teclado de membrana e mouse.",
            imagem: "https://media.istockphoto.com/id/1170073824/pt/foto/gamer-work-space-concept-top-view-a-gaming-gear-mouse-keyboard-joystick-headset-mobile.jpg?s=2048x2048&w=is&k=20&c=vbHwmd3Yvz8hzzklzpvulrZ3mH8UIgQ0xEA4K08QtyI=",
            valor: "R$ 2400,00"
        },
        {
            nome: "Mousepad",
            descricao: "Mousepad 90x40",
            imagem: "https://media.istockphoto.com/id/1400153567/pt/foto/selective-focus-of-a-teenagers-hands-playing-on-a-gaming-computer-with-a-black-keyboard-on-a.jpg?s=2048x2048&w=is&k=20&c=pz6g6DVWpeiBuIJ1ozmY-qLFpPRCvoe7rUaYOoxf0iM=",
            valor: "R$ 150,00"
        },
        {
            nome: "Web Cam",
            descricao: "Webcam Logitech HD 1080P 60FPS para transmições.",
            imagem: "https://media.istockphoto.com/id/1366598344/pt/foto/join-a-video-call-or-partecipate-in-a-video-conference-use-the-webcam-concepts.jpg?s=2048x2048&w=is&k=20&c=BvAhFiQSZp4GUzsn4tHo8D6Z1NiMXFY_Na3RINAoWFc=",
            valor: "R$ 249,00"
        },
        {
            nome: "Microfone de Mesa",
            descricao: "Microfone de mesa fifine A8 plus.",
            imagem: "https://media.istockphoto.com/id/1255992865/pt/foto/microphone-for-sound-music-karaoke-in-audio-studio-or-stage-mic-technology-voice-concert.jpg?s=2048x2048&w=is&k=20&c=3c1K0eEBTiTNDh_gb1af90D4pCYzF1R8rRfQUaYmjzw=",
            valor: "R$ 450,00"
        }
    ];

    const conteudoPrincipal = document.getElementById("conteudo-principal");

    produtos.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("conteudo-produto");

        const imagem = document.createElement("img");
        imagem.src = produto.imagem;
        produtoDiv.appendChild(imagem);

        const nome = document.createElement("h2");
        nome.textContent = produto.nome;
        produtoDiv.appendChild(nome);

        const descricao = document.createElement("p");
        descricao.textContent = produto.descricao;
        produtoDiv.appendChild(descricao);

        const valor = document.createElement("p");
        valor.classList.add("valor");
        valor.textContent = produto.valor;
        produtoDiv.appendChild(valor);

        const botao = document.createElement("button");
        botao.textContent = "Comprar";
        produtoDiv.appendChild(botao);

        conteudoPrincipal.appendChild(produtoDiv);
    });
});