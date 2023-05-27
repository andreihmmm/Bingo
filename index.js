function gerarCartela() {
    var nome = document.getElementById('nomes').value;

    var espacoCartelas = document.getElementById('cartelas')

    var tabela = document.createElement('section')
    var bingo = document.createElement('h4')
    bingo.textContent = ("BINGO")
    var x = document.createTextNode("x")
    tabela.appendChild(bingo)

    var corpoTabela = document.createElement("table");
    tabela.classList.add('tabela');

    espacoCartelas.appendChild(tabela);

    for (let i = 0; i < 5; i++) {
        var tr = corpoTabela.insertRow(0);
        corpoTabela.appendChild(tr)
        for (let j = 0; j < 5; j++) {
            var td = tr.insertCell(0)
            tr.appendChild(td)
            for (let k = 0; k < 24; k++) {
                var n = Math.floor(Math.random() * 61);
                var textNode = document.createTextNode(n);

            } if (i === 2 && j === 2) {
                textNode = x
            }
            td.appendChild(textNode);
        }
    }
    tabela.appendChild(corpoTabela);

}

function gerarNumeros() {
    var resultados = document.getElementById("numeros");
    var numerosJaSorteados = document.querySelectorAll('.s');
    var numeros = [];

    for (var i = 0; i < numerosJaSorteados.length; i++) {
        var elemento = numerosJaSorteados[i];
        numeros.push(elemento.textContent);
    }

    alert(numeros);


    var campoNumero = document.createElement('section')
    campoNumero.classList.add('s');

    var numeroSorteado = Math.floor(Math.random() * 61);
    var textN = document.createTextNode(numeroSorteado);

    resultados.appendChild(campoNumero);
    campoNumero.appendChild(textN)
}