// EXERCÍCIO 01
function inverteArray(array) {
  

}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
let numeros
let novoArray = []
for (numeros of array) {
  if (numeros % 2 === 0) {
     novoArray.push(numeros * numeros) 
  }
}
 return novoArray
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
let numerosDoArray
let novoArray2 = []
for (numerosDoArray of array) {
  if (numerosDoArray % 2 === 0) {
     novoArray2.push(numerosDoArray)
  }
}
  return novoArray2
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
return Math.max(...array)
}


// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length 
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [false, false, true, true, true]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a !== b && b !== c && a !== c){
    return 'Escaleno'
  } else if (a === b && b === c && c === a){
    return 'Equilátero'
  } else if (a === b || a === c || b === c){
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
let comparacao
  if (num1 >= num2){
    let maiorNumero = num1
    let divisivel2 = maiorNumero % num2 === 0
      comparacao = {
      maiorNumero: maiorNumero,
      maiorDivisivelPorMenor: divisivel2,
      diferenca: maiorNumero - num2
    } 
  } else if (num2 >= num1){
    let maiorNumero = num2
    let divisivel = maiorNumero % num1 === 0
      comparacao = {
      maiorNumero: maiorNumero,
      maiorDivisivelPorMenor: divisivel,
      diferenca: maiorNumero - num1
  }
} return comparacao
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  for (let ultimo = array.length - 1; ultimo > 0; ultimo--){
    for (let i = 0; i < ultimo; i++){
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
      }
    }
  } 
  arraySegundoMaiorMenor = []
  arraySegundoMaiorMenor.push(array[array.length - 2], array[1])
  return arraySegundoMaiorMenor 
}

// EXERCÍCIO 11
function ordenaArray(array) {
for (let ultimo = array.length - 1; ultimo > 0; ultimo--){
  for (let i = 0; i < ultimo; i++){
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]]
    }
  }
} return array 
}

// EXERCÍCIO 12
function filmeFavorito() {
const filme = {
  nome: "O Diabo Veste Prada",
  ano: 2006,
  diretor: "David Frankel",
atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
  atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
  }
  return "Venha assistir ao filme " + filme.nome + ", de " + filme.ano + ", dirigido por " + filme.diretor + " e estrelado por " + filme.atores + "."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
const retangulo = {
  largura: lado1,
  altura: lado2,
  perimetro: 2 * (lado1 + lado2),
  area: lado1 * lado2
}
return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const pessoa1 ={
    nome: "ANÔNIMO",
    idade: pessoa.idade,
    email: pessoa.email,
    endereco: pessoa.endereco
  }
  return pessoa1
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  let numero
  let novoArray = []
  for (numero of array){
    novoArray.push(numero*2)
  }
  return novoArray
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let numero 
  let novoArray = []
  for (numero of array){
    novoArray.push((numero*2).toString())
  }
  return novoArray
}

// EXERCÍCIO 17C
function verificaParidade(array) {
    let numero 
    let novoArray = []
    for (numero of array){
      if (numero % 2 === 0){
        novoArray.push(numero + " é par")
      } else if (numero % 2 === 1){
        novoArray.push(numero + " é ímpar")
      }
    }
    return novoArray
  }

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {
 
}