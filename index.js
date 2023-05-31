function gerarCartela() {
    //seleciona o nome no input, declara o espaco onde as cartelas vao ficar
    var nome = document.getElementById('nomes').value;
    var espacoCartelas = document.getElementById('cartelas');

    //cria uma seçao tabela para conter a tabela
    var tabela = document.createElement('section');
    var bingo = document.createElement('h4');

    //deixa bingo escrito na parte de cima da seçao tabela
    bingo.textContent = "BINGO";
    tabela.appendChild(bingo);
    var x = document.createTextNode("X");

    //cria a marcaçao tabela
    var corpoTabela = document.createElement("table");
    tabela.classList.add('tabela');

    //considera o nome no input como id da tabela criada
    tabela.id = nome

    //coloca a tabela no espaço destinado as cartelas
    espacoCartelas.appendChild(tabela);

    //cria um array que conterá os nºs na cartela
    var numerosDaCartela = [];

    //cria 5 table rows
    for (let i = 0; i < 5; i++) {

        var tr = corpoTabela.insertRow();

        //cria 5 celulas para cada linha
        for (let j = 0; j < 5; j++) {

            var td = tr.insertCell();

            if (j === 0) {
                do {
                    numeroSorteado = Math.floor(Math.random() * 15) + 1;
                }
                while (numerosDaCartela.includes(numeroSorteado));
                numerosDaCartela.push(numeroSorteado)

                var textNode = document.createTextNode(numeroSorteado);
                td.id = numeroSorteado
                td.appendChild(textNode);

            } else if (j === 1) {
                do {
                    numeroSorteado = Math.floor(Math.random() * 15) + 16;
                }
                while (numerosDaCartela.includes(numeroSorteado));
                numerosDaCartela.push(numeroSorteado)

                var textNode = document.createTextNode(numeroSorteado);
                td.id = numeroSorteado
                td.appendChild(textNode);


            } else if (i === 2 && j === 2) {
                td.appendChild(x)
            }

            else if (j === 2) {
                do {
                    numeroSorteado = Math.floor(Math.random() * 15) + 31;
                }
                while (numerosDaCartela.includes(numeroSorteado));
                numerosDaCartela.push(numeroSorteado);

                var textNode = document.createTextNode(numeroSorteado);
                td.id = numeroSorteado
                td.appendChild(textNode);

            } else if (j === 3) {
                do {
                    numeroSorteado = Math.floor(Math.random() * 15) + 46;
                }
                while (numerosDaCartela.includes(numeroSorteado));
                numerosDaCartela.push(numeroSorteado);

                var textNode = document.createTextNode(numeroSorteado);
                td.id = numeroSorteado
                td.appendChild(textNode);
            } else if (j === 4) {
                do {
                    numeroSorteado = Math.floor(Math.random() * 15) + 61;
                }
                while (numerosDaCartela.includes(numeroSorteado));
                numerosDaCartela.push(numeroSorteado)

                var textNode = document.createTextNode(numeroSorteado);
                td.id = numeroSorteado
                td.appendChild(textNode);

            }
        }

        tabela.appendChild(corpoTabela);
    }
}


function jogar() {
    var quantidadeJogadores = document.querySelectorAll('.tabela').length;
    var resultados = document.getElementById("numeros");

    var numerosJaSorteados = [];
    //SELECIONA OS NUMEROS
    var tdArray = Array.from(document.querySelectorAll("#cartelas > section > table > tbody > tr > td"));
    var textArray = tdArray.map(function (td) {
        return td.textContent;
    });
    alert(textArray.join(", "));


    while (numerosJaSorteados.length < 76) {

        var numeroSorteado = Math.floor(Math.random() * 75) + 1;

        if (numerosJaSorteados.includes(numeroSorteado)) {

            console.log("repetido");

        } else {

            numerosJaSorteados.push(numeroSorteado);
            var campoNumero = document.createElement('section');
            campoNumero.classList.add('s');
            campoNumero.id = numeroSorteado
            var textN = document.createTextNode(numeroSorteado);
            resultados.appendChild(campoNumero);
            campoNumero.appendChild(textN);

            if (tdArray.includes(numeroSorteado)) {
                var numerosCartela = document.querySelectorAll("#cartelas .tabela td[id='#" + numeroSorteado.toString() + "']");
                // Faça algo com os elementos numerosCartela selecionados
                numerosCartela.classList.add('acertou')
            }


        }

    }

}    