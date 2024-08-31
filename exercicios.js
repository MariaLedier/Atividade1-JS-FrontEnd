function Atividade1(){
    document.write("<h3> 1)	Construa um script JS para somar a seguinte expressão 5 + 3 + 10 + “20” e tente achar como resultado o valor 38</h3>")
    let num1=5
    let num2=3
    let num3=10
    let str='20'

    let soma = parseInt(str)+num1+num2+num3
    
    document.write("<h4 style='color:red'> O resultado da soma é: ",soma +"</h4>")
   

}

function Atividade2(){
    document.write("<h3> 2)	Construa um script JS para concatenar nome e o sobrenome de uma pessoa.  Utilize dois prompts para fazer a entrada de dados.</h3>")
    
    let nome= prompt('Digite o seu PRIMEIRO nome:','Nome')
    let sobrenome = prompt('Digite o seu SOBRENOME','Sobrenome')

    let concatenar= nome+' '+sobrenome
    
    document.write("<h4 style='color:red'> O seu nome é: "+concatenar+"</h4>")

}

function Atividade3() {
    document.write("<h3>3) Construa um script JS que receba um número inteiro e retorne um valor lógico (true/false) indicando se este número é par ou ímpar.</h3>");
    
    let num = parseInt(prompt('Digite um número:', 'Número'));
    
    if (isNaN(num)) {
        document.write("<h4 style='color:red'>Por favor, insira um número válido.</h4>");
    }

    if (num % 2 === 0) {
        document.write("<h4 style='color:red'>O número digitado é: par</h4>");
        return true;
    } else {
        document.write("<h4 style='color:red'>O número digitado é: ímpar</h4>");
        return false;
    }

    
}



function Atividade4() {

    let op = prompt('Digite um operador aritmético (+ - * /):', '+');

    
    if (op !== '*' && op !== '/' && op !== '+' && op !== '-') {
        alert('OPERADOR INCORRETO');
        return false;
    }

    let num1 = parseFloat(prompt('Forneça o 1° número:'));
    let num2 = parseFloat(prompt('Forneça o 2° número:'));
    let resultado;

  
    switch (op) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.write("<h4 style='color:red'>É impossível dividir por 0.</h4>");
                return false;
            }
            resultado = num1 / num2;
            break;
    }

   
    document.write("<h3> 4)	Construa um script JS que utilize o Prompt. Solicite ao usuário um operador aritmético (+ - * / ) e depois dois números (use três prompts). Calcule a operação e exiba o resultado. </h3>");
    document.write("<h4 style='color:red'>O resultado de " + num1 + " " + op + " " + num2 + " é igual a: " + resultado + "</h4>");
}


function Atividade5() {
    let vidas = 6;
    let nome = prompt('Digite seu nome:', "Aqui");

    // Sortear número entre 1 e 20
    let sorteado = parseInt(Math.floor(Math.random() * (20 - 1 + 1)) + 1);
    let numero = parseInt(prompt('Digite um número a ser adivinhado:', ''));

    while (vidas > 0) {
        if (numero == sorteado) {
            document.write("<h4 style='color:green'>Parabéns " + nome + "! Você acertou o número " + sorteado + "!</h4>");
            break; 
        } else {
            alert("Errou! Digite novamente.");
            vidas--;
            if (vidas > 0) {
                numero = parseInt(prompt('Digite um número a ser adivinhado:', ''));
            }
        }
    }

    if (vidas == 0) {
        document.write(`<h4 style='color:red'>Você perdeu todas as chances. O número era: ${sorteado}</h4>`);
    }
}
