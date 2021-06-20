calcular = document.getElementById('calcular');

calcular.addEventListener('click', calculo);

function calculo () {
	nome = document.getElementById('nome').value;
    altura = document.getElementById('altura').value;
    peso = document.getElementById('peso').value;
    resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        imc	= (peso / (altura * altura)).toFixed(2);

        situacao = '';

        if (imc < 18.5){
            situacao = 'Magreza';
        } 
		else if (imc < 25) {
            situacao = 'Normal';
        } 
		else if (imc < 30){
            situacao = 'Sobrepeso';
        } 
		else if (imc < 35){
            situacao = 'Obesidade I';
        } 
		else if (imc < 40){
            situacao = 'Obesidade II';
        } 
		else {
            situacao = 'Obesidade III';
        }

        document.getElementById("resultado").innerHTML = `Olá, ${nome}! O seu IMC é de ${imc}, e segundo a tabela abaixo, você se encontra em: ${situacao}`;

    } 
	else {
        document.getElementById("resultado").innerHTML = 'Preencha todos os campos!';
    }
}

function limpa_visor(){
	document.location.assign("calculadora_imc.html")
}
