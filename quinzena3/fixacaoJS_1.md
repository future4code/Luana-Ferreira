function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let comissao = qtdeCarrosVendidos * 100 
 let valorDasVendas = valorTotalVendas * 0.05
 let salario = 2000 + comissao + valorDasVendas
 return salario 
}
