/* Exercícios de interpretação de código 

1)

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array) // retorna o conteúdo de cada index com indicação de qual é, e retorna o 
     // array completo.
  })

2)

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB) // retorna um array com o nome de cada usuário.

  3)

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC) // retorna um array com os elementos que não tem "chijo" como apelido. */

// Exercícios de escrita de código 

// 1)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a)

 const novoArrayPets = pets.map((item) => {
     return item.nome 
 })

 console.log(novoArrayPets)

 // b) 

 const novoArrayPets2 = pets.filter((item) => {
    return item.raca === "Salsicha"
 })

 console.log(novoArrayPets2)

 // c)

 const novoArrayPets3 = pets.filter((item) => {
     return item.raca === "Poodle"
 })

 const novoArrayPets4 = novoArrayPets3.map((item) => {
     const mensagem = ("Você ganhou um cupom de desconto de 10% para tosar o/a " + item.nome)
     return mensagem
 })

 console.log(novoArrayPets4)

 // 2)

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a)

 const novoArrayProdutos = produtos.map((item) => {
     return item.nome
 })

 console.log(novoArrayProdutos)

 // b)

const novoArrayProdutos2 = produtos.map((item) => {
    const produtosComDesconto = {
        nome: item.nome,
        preco:item.preco - (item.preco/100 * 5)
        }
    return produtosComDesconto
})

console.log(novoArrayProdutos2)

// c)

const novoArrayProdutos3 = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})

console.log(novoArrayProdutos3)

// d)

const novoArrayProdutos4 = produtos.filter((item) => {
    if (item.nome.includes("Ypê")){
       return item.nome
    }
})

console.log(novoArrayProdutos4)

// e)

const novoArrayProdutos5 = novoArrayProdutos4.map((item) => {
       const mensagemDeCompra = ("Compre " + item.nome + " por " + item.preco)
       return (mensagemDeCompra)
})

console.log(novoArrayProdutos5)