// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  let altura = prompt("Qual é a altura do retângulo?")
  let largura = prompt("Qual é a largura do retângulo?")
  console.log (altura*largura)
}

// Exercício 2
function imprimeIdade() {
  let anoAtual = prompt("Em que ano estamos?")
  let anoQueNasceu = prompt("Em que ano você nasceu?")
  console.log (anoAtual-anoQueNasceu)
}

// Exercício 3
function calculaIMC() {
  let pesoDaPessoa = prompt("Qual o seu peso em quilos (kg)?")
  let alturaDaPessoa = prompt("Qual a sua altura em metros (m)?")
  console.log ((pesoDaPessoa)/(alturaDaPessoa*alturaDaPessoa))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  let nomeDaPessoa = prompt("Qual é o seu nome?")
  let idadeDaPessoa = prompt("Quantos anos você tem?")
  let emailDaPessoa = prompt("Qual é o seu email?")
  console.log ("Meu nome é " +nomeDaPessoa+ ", tenho " +idadeDaPessoa+ " anos, e o meu email é " +emailDaPessoa+ ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Qual a sua cor favorita?")
  let cor2 = prompt("Qual a sua segunda cor favorita?")
  let cor3 = prompt("Qual a sua terceira cor favorita?")
  console.log ([cor1, cor2, cor3])
} 

// Exercício 6
function retornaStringEmMaiuscula() {
  let digiteUmaPalavra = prompt("Digite uma palavra")
  console.log (digiteUmaPalavra .toUpperCase ())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  let custoDoEspetaculo = prompt("Qual o custo de um espetáculo?")
  let valorDoIngresso = prompt("Qual o valor do ingresso desse espetáculo?")
  console.log (custoDoEspetaculo/valorDoIngresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  let primeiraPalavra = prompt("Digite uma palavra") 
  let segundaPalavra = prompt("Digite outra palavra")
  console.log (primeiraPalavra.length === segundaPalavra.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  let palavraUm = prompt("Digite uma palavra")
  let palavraDois = prompt("Digite outra palavra")
  let comparacao = (palavraUm .toUpperCase () == palavraDois .toUpperCase ())
  console.log (comparacao)
}

// Exercício 10
function checaRenovacaoRG() {
  let anoQueEstamos = prompt("Informe em que ano estamos.")
  let anoDeNascimento = prompt("Informe o ano do seu nascimento.")
  let anoIdentidade = prompt("Informe o ano em que a sua carteira de identidade foi emitida.")
  let vinteAnos = ((anoQueEstamos - anoDeNascimento <= 20) && (anoQueEstamos - anoIdentidade >= 5))
  let menosDe50 = ((anoQueEstamos - anoDeNascimento > 20) && (anoQueEstamos - anoDeNascimento <= 50) && (anoQueEstamos - anoIdentidade >= 10))
  let maisDe50 = ((anoQueEstamos - anoDeNascimento > 50) && (anoQueEstamos - anoIdentidade >=15))
  console.log ((vinteAnos) || (menosDe50) || (maisDe50))
}

// Exercício 11
function checaAnoBissexto() {
  let anoAleatório = prompt("Escreva um ano.")
  let condicao1 = (anoAleatório % 400 == 0)
  let condicao2 = ((anoAleatório % 4 == 0) && (anoAleatório % 100 > 0) && (anoAleatório % 400 > 0))
  let condicao3 = (anoAleatório == !true)
  console.log ((condicao1) || (condicao2) || (condicao3)) 

}
// Exercício 12
function checaValidadeInscricaoLabenu() {
  let pergunta1 = prompt("Você tem mais de 18 anos?") 
  let pergunta2 = prompt("Você possui ensino médio completo?")
  let pergunta3 = prompt("Você possui disponibilidade exclusiva durante os harários do curso?")
  let condicional = ((pergunta1 == "sim") && (pergunta2 == "sim") && (pergunta3 == "sim"))
  let condicional2 = ((pergunta1 == "não") || (pergunta2 == "não") || (pergunta3 == "não"))
  console.log((condicional) || (condicional2))
}