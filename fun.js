calcular = document.getElementById('calcular');

function calculo () {
	nome = document.getElementById('nome').value;
    altura = document.getElementById('altura').value;
    peso = document.getElementById('peso').value;
    resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        imc	= (peso / (altura * altura)).toFixed(1);

        classificacao = '';

        if (imc < 18.5){
            classificacao = 'Magreza';
        } else if (imc < 25) {
            classificacao = 'Normal';
        } else if (imc < 30){
            classificacao = 'Sobrepeso';
        } else if (imc < 35){
            classificacao = 'Obesidade I';
        } else if (imc < 40){
            classificacao = 'Obesidade II';
        } else {
            classificacao = 'Obesidade III';
        }

        resultado.textContent = `Olá, ${nome}! O seu IMC é de ${imc}, e segundo a tabala abaixo, você se encontra em: ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!';
    }
}

calcular.addEventListener('click', calculo);

function limpa_visor(){
	document.location.assign("calculadora_imc.html")
}
