calcular = document.getElementById('calcular');

function calculo () {
	nome = document.getElementById('nome').value;
    altura = document.getElementById('altura').value;
    peso = document.getElementById('peso').value;
    resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        imc	= (peso / (altura * altura)).toFixed(2);

        classificacao = '';

        if (imc < 18.5){
            classificacao = 'Magreza';
        } 
		else if (imc < 25) {
            classificacao = 'Normal';
        } 
		else if (imc < 30){
            classificacao = 'Sobrepeso';
        } 
		else if (imc < 35){
            classificacao = 'Obesidade I';
        } 
		else if (imc < 40){
            classificacao = 'Obesidade II';
        } 
		else {
            classificacao = 'Obesidade III';
        }

        document.getElementById("resultado").innerHTML = `Olá, ${nome}! O seu IMC é de ${imc}, e segundo a tabela abaixo, você se encontra em: ${classificacao}`;

    } 
	else {
        document.getElementById("resultado").innerHTML = 'Preencha todos os campos!';
    }
}

calcular.addEventListener('click', calculo);

function limpa_visor(){
	document.location.assign("calculadora_imc.html")
}
