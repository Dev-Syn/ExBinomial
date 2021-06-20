const calcular = document.getElementById("calcular");

function fatorial(numero){
    let resultado = 1;

    for(var count=1 ; count<=numero ; count++) {
        resultado *= count;
    }

    return resultado
}

function nBinomial(){

    const n = parseInt(document.getElementById("n").value); //número de ensaios
    const k = parseFloat(document.getElementById("k").value); //número de casos de sucesso

    let nFat = parseInt(fatorial(n));
    let kFat = parseFloat(fatorial(k));

    let resto = n - k;

    let numBinomial = nFat / (kFat*(fatorial(resto)));

    return numBinomial;
}

function resolver() {

    const n = parseInt(document.getElementById("n").value); //número de ensaios
    const k = parseFloat(document.getElementById("k").value); //número de casos de sucesso
    const p = parseFloat(document.getElementById("p").value); //Porcentagem de caso de sucesso

    const numBinominal = nBinomial();

    const result = numBinominal * ((p ** k) * (1 - p) ** (n - k));

    const resultSet = (result * 100).toFixed(2);

    resultado.textContent = `A probabilidade de sucesso é de: ${resultSet} %.`;
}

calcular.addEventListener("click", resolver);