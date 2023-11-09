function mediaAluno(notas, metodo) {
    let somaNota = 0
    let somaPeso = 0
    const peso = [5, 3, 2]

    if (metodo === "A") {
        for (let nota of notas) {
            somaNota += nota
        }

        let media = somaNota / notas.length
        return media
    } else if (metodo === "P") {
        for(let i = 0; i < notas.length; i++) {
            somaNota += notas[i] * peso[1]
            somaPeso += peso[1]
        }
        let media = somaNota / somaPeso
        return media
    }
}

const notas = [9, 4, 5]
const metodo = "P"

console.log(mediaAluno(notas, metodo))

//Crie uma função que recebe um valor inteiro e retorne verdadeiro se for ímpar ou falso se for par.

function imparpar (numero) {
    if (numero % 2 === 0){
        return true
    } else  {
        return false
    }
    
}

console.log(imparpar(2))

//Crie uma função que recebe por parâmetro um valor inteiro e positivo e retorne verdadeiro se o número for primo ou falso se não for.
let numero = 5
function validar(num) {
    if (num === 2) return true
    if (num % 2 === 0) return false

    for (let i = 3; i * i <= num; i += 2) {
        if (numero % i === 0) 
            return false
    }
    return true
}

console.log(validar(22))


//Crie uma função que recebe por parâmetro o tempo de duração de uma fábrica expressa em segundos e retorna esse tempo em horas, minutos e segundos. 

//Ex: 
//Entrada: 3672 
//Saída: 1:1:12


function tempo (segundos) {
    const horas = Math.floor(segundos / 3600)
    segundos %= 3600
    const minutos = Math.floor(segundos / 60)
    segundos %= 60

    return `${horas}: ${minutos}: ${segundos}`
}



const tempoSegundos = 3672
const tempoFormatado = tempo(tempoSegundos)

console.log(`entrada: ${tempoSegundos}`)
console.log(`saída: ${tempoFormatado}`)





//Crie uma função que recebe um valor inteiro e retorne verdadeiro se é um valor perfeito ou falso se não for. Um valor é dito perfeito quando ele é igual a soma dos seus divisores excetuando ele próprio.

//Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

function perfect(valor) {
    if (valor <= 1)
        return false;


    let somaDivisores = 1;

    for (let i = 2; i < valor; i++) {
        if (valor % i === 0)
            somaDivisores += i;
    }
    return somaDivisores === valor;
}

console.log(perfect(1284));
//Crie uma função chamada acessoAoSite() que não tenha parâmetro. Esta função será chamada ao abrir a página e mostrará um alerta informando “Bem vindo ao site”. 


function acessoAoSite() {
   alert('Bem vindo ao site.')
}

acessoAoSite()


// Crie uma função chamada mostrarMensagem() que não tenha parâmetro. Esta função será chamada ao abrir a página e mostrará uma mensagem no console.log() informando “Acesso à aplicação NomeAplicação” e um alerta informando “Bem vindo à aplicação NomeApliação”. Sendo que o nome da aplicação deve ser salvo em uma variável para mostrar nas mensagens.

function mostrarMensagem() {
    let NomeAplicacao = 'Site'
    return console.log(`Acesso à aplicação ${NomeAplicacao}.`),
    alert(`Bem vindo à aplicação ${NomeAplicacao}`)
}

mostrarMensagem()

//Crie uma função chamada mostrarDobro(num), que recebe um parâmetro sendo um número inteiro. Esta função será chamada ao abrir a página e mostrará um alerta com o resultado. Exemplo: “O dobro do número 5 é 10.”


function mostrarDobro(numero1) {
    let multi = numero1 * 2
    alert(`O dobro do número ${numero1} é ${multi}`)
}

mostrarDobro(10)

//Crie uma função chamada calcularMedia(nota1, nota2, nota3,nome), que recebe 4 parâmetros sendo três inteiros e um texto (String). Esta função será chamada ao abrir a página e mostrará um alerta com a média. Exemplo: “João, sua média é 70.” A função também deve mostrar no console.log() as notas recebidas. Exemplo “Nota 1: 60,Nota 2: 70,Nota 3: 80”.

function calcularMedia(nota1, nota2, nota3, nome) {
    let media1 = (nota1 + nota2 + nota3) / 3
    alert(`${nome}, sua média é ${media1.toFixed(0)}.`)
    console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}`)
}

calcularMedia(90, 80, 80, 'Nalanda')