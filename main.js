//Função sleep e reolad

function DormirEreload(Miliseconds) {
    function recarregar() {
        document.location.reload()
    }
    setTimeout(recarregar, Miliseconds);
}

//Função de calcular densidade
function CalcularDensidade(){
    // Variaveis para pegar os valores dos inputs.
    var p_vazio = document.querySelector('#p-vazio').value;
    var p_h2o = document.querySelector('#p-h2o').value;
    var p_produto = document.querySelector('#p-produto').value;

    //Criando uma tag p para alocar o resultado.
    var elemento_pai = document.querySelector('#resultado');
    var elemento_p = document.createElement('p');
    elemento_p.setAttribute('class', 'p-resultado');
    //criar função para alocar o resultado dentro de P e depois alocar o P no elemento_pai.

    function CalculoDensidade(produto, h2o, vazio){
        var calculo = Number((produto - vazio) / (h2o - vazio));
        return String(calculo);
    }

    if ((p_vazio && p_h2o && p_produto) == ''){
        var getBody = document.body;
        getBody.style = 'text-align: center;';
        getBody.innerHTML = 'Está Faltando Valores, insira todos corretamente!';
        DormirEreload(3000);
    } else {
        var resultado = document.createTextNode(CalculoDensidade(p_produto, p_h2o, p_vazio));
        elemento_p.appendChild(resultado);
        elemento_pai.appendChild(elemento_p);
    }
}
