const calcular = document.getElementById("calcular");


//Fazendo o calculo de um número fatorial e retornando o resultado
function fatorial(numero){
    let resultado = 1;

    for(var count=1 ; count<=numero ; count++) {
        resultado *= count;
    }

    return resultado
}


//Fazendo o calculo de um número binomial seguindo a fórmula e retornando o resultado
function nBinomial(){

    const n = parseInt(document.getElementById("n").value); //número de ensaios
    const k = parseFloat(document.getElementById("k").value); //número de casos de sucesso

    let nFat = parseInt(fatorial(n));
    let kFat = parseFloat(fatorial(k));

    let resto = n - k;

    let numBinomial = nFat / (kFat*(fatorial(resto)));

    return numBinomial;
}


//Realizando o formula geral, ee
function resolver() {

    const n = parseInt(document.getElementById("n").value); //número de ensaios
    const k = parseFloat(document.getElementById("k").value); //número de casos de sucesso
    const p = parseFloat(document.getElementById("p").value); //Porcentagem de caso de sucesso

    const numBinominal = nBinomial();

    const result = (numBinominal * ((p ** k) * (1 - p) ** (n - k))).toFixed(4);

    const resultSet = (result * 100).toFixed(2);

    resultado.textContent = `A probabilidade de sucesso é de: ${result}, em porcentagem: ${resultSet} %.`;
}

calcular.addEventListener("click", resolver);