//função q realiza a soma de 2 numeros

const soma = () => {

    // declara uma variavel e atribui valor
let numero1 = window.prompt('Digite o primeiro numero')

let numero2 = window.prompt('Digite o segundo numero')

//parsseint converte uma string em inteiro e parsefloat para dicimal

let soma = parseFloat(numero1) + parseFloat(numero2)

alert('Soma dos numeros: '+soma)

}

const soma2 = (numero1,numero2) => {
    let soma = numero1 + numero2
    alert(soma)
}

//Função que soma os 2 numeros digitados pelo usuario em um ''formulario''
const somaNumeros = () =>{
    //Cria uma variavel e captura o valor do input com id = numero1
    let numero1 = document.getElementById('numero1').value

    let numero2 = document.getElementById('numero2').value

    let soma = parseFloat(numero1) + parseFloat(numero2)

    // exibe a soma dentro da div resultado
    document.getElementById('resultado').innerHTML =`
    Resultado da soma é ${soma}`

}
