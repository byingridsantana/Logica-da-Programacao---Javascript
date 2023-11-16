/*Calculadora de Índice de Massa Corporal (IMC)

Descrição:
A tarefa é criar uma calculadora de IMC usando variáveis. O IMC é uma medida que relaciona o peso e a altura de uma pessoa para avaliar se ela está abaixo do peso, no peso normal, com sobrepeso ou obesa. A fórmula do IMC é: `IMC = peso / (altura * altura).`

Instruções:

- Peça ao usuário que informe seu peso (em kg) e sua altura (em metros).
- Utilize variáveis para armazenar esses valores.
- Calcule o IMC usando a fórmula fornecida.

<hr/>

Com base no resultado, informe ao usuário em qual faixa de IMC ele se encontra, de acordo com a tabela abaixo:

**Abaixo do peso: IMC < 18.5 <br/>
Peso normal: 18.5 <= IMC < 24.9 <br/>
Sobrepeso: 25 <= IMC < 29.9 <br/>
Obesidade: IMC >= 30** */ 

var peso = parseFloat(prompt("Digite seu peso em kg: "));
var altura = parseFloat(prompt("Digite sua altura em metros: "));

// Calculando o IMC:

var imc = peso / (altura * altura);

// Determinando a faixa de IMC usando a estrutura switch:

var mensagem = "";
switch(true) {
  case (imc < 18.5):
    mensagem = "Cuidado! Você está abaixo do peso.";
    break;
  case (imc >= 18.5 && imc < 25):
    mensagem = "Você está no peso ideal.";
    break;
  case (imc >= 25 && imc < 30):
    mensagem = "Cuidado! Você está com sobrepeso.";
    break;
  default:
    mensagem = "Cuidado! Você está com obesidade.";
    break;
}

// Exibindo o resultado para o usuário:
console.log("Seu IMC é " + imc.toFixed(2) + ". " + mensagem);