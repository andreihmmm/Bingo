var jogadores = []

function gerarNumerosAleatorios(quantidade, min, max) {

    var numeros = []

    while (numeros.length < 5) {

        var aleatorio = Math.floor(Math.random() * (max - min)) + min;

        if (!numeros.includes(aleatorio)) {
            numeros.push(aleatorio)
        }

    } return numeros;

}

function gerarCartela() {
    //seleciona o nome no input, declara o espaco onde as cartelas vao ficar
    var nome = document.getElementById('nomes').value
    if (nome == '') {
        alert('insira um nome po');
        return
    }

    var cartela = [gerarNumerosAleatorios(5, 1, 15), gerarNumerosAleatorios(5, 16, 30),
    gerarNumerosAleatorios(4, 31, 45), gerarNumerosAleatorios(5, 46, 60),
    gerarNumerosAleatorios(5, 61, 75)]

    cartela[2][2] = 'X'


    jogadores.push({
        nomeJogador: nome,
        cartela: cartela,
        pontuacao: 0,
        status: ''
    });

    console.log(jogadores)

    var div = document.createElement('div');
    div.classList.add('cartela');

    var tabela = document.createElement('table');

    var h4 = document.createElement('h4');
    h4.innerText = nome
    div.appendChild(h4);

    var thead = document.createElement('thead');

    //deixa bingo escrito na parte de cima da seçao tabela
    var letras = ['B', 'I', 'N', 'G', 'O'];

    for (var i = 0; i < letras.length; i++) {
        var th = document.createElement('th');
        th.innerText = letras[i];
        thead.appendChild(th);
    }
    div.appendChild(thead);

    for (var i = 0; i < 5; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < 5; j++) {  // Fixed the condition here
            var td = document.createElement('td');

            if (i === 2 && j === 2) {
                td.innerText = 'X';
                td.classList.add('acertou')
                tr.appendChild(td);
            } else {
                td.innerText = cartela[j][i];
                tr.appendChild(td);
                td.classList.add('numero' + cartela[j][i])
            }
        }

        tabela.appendChild(tr);
    }
    div.appendChild(tabela)

    var espacoCartelas = document.querySelector('#cartelas')
    espacoCartelas.appendChild(div)

    //reseta o input
    document.getElementById('nomes').value = '';
}

function task() {
    var resultados = document.getElementById("numeros");
    console.log(resultados)
    var numerosJaSorteados = [];
    acabou = false
    totalNumeros = 75;

    function sorteio() {
        var numeroSorteado = Math.floor(Math.random() * totalNumeros) + 1;

        if (numerosJaSorteados.includes(numeroSorteado)) {
            sorteio();
        } else {
            numerosJaSorteados.push(numeroSorteado);
            console.log(numeroSorteado)

            for (i = 0; i < jogadores.length; i++) {
                var jogador = jogadores[i]
                var cartela = jogador.cartela
                for (j = 0; j < 5; j++) {
                    var subArray = cartela[j];
                    if (subArray.includes(numeroSorteado)) {
                        var marcadores = document.querySelectorAll('.numero' + numeroSorteado);
                        marcadores.forEach(function (marcador) {
                            marcador.classList.add('acertou');
                        });
                    }
                }
            }

            var campoNumero = document.createElement('section');
            campoNumero.classList.add('s');
            campoNumero.id = numeroSorteado;
            var textN = document.createTextNode(numeroSorteado);
            resultados.appendChild(campoNumero);
            campoNumero.appendChild(textN);

            for (i = 0; i < jogadores.length; i++) {
                var jogador = jogadores[i]
                var cartela = jogador.cartela
                for (j = 0; j < 5; j++) {
                    var subArray = cartela[j]
                    if (subArray.includes(numeroSorteado)) {
                        jogador.pontuacao++
                        if (jogador.pontuacao === 24) {
                            alert(jogador.nomeJogador + ' venceu')
                            acabou = true
                            jogador.status = 'venceu'
                        }
                    }
                }
            }

            if (!acabou) {
                setTimeout(sorteio, 2000);
            }
        }
    }

    sorteio();
}

function jogar(i) {
    setTimeout(task, 500 * i);
}




function apagar() {
    var resultados = document.getElementById("numeros");
    resultados.innerHTML = "";
    var cartelas = document.getElementById('cartelas')
    cartelas.innerHTML = '';
    jogadores = [];
}