import React from 'react'
import axios from 'axios'
import Lista from './components/Lista'
import Formulario from './components/Formulario'

class App extends React.Component {
  state = {
    exibirLista: false,
    inputNome: '',
    inputEmail: ''
  }

  criarUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "luana-ferreira-johnson"
          }
        }
      )
      .then(() => {
        alert("Usuário criado com sucesso!")
        this.setState({inputNome: "", inputEmail: ""});
      })
      .catch((error) => {
        alert("Falha ao criar usuário")
        console.log(error.message)
      })
  }

  renderPagina = () => {
    this.setState({exibirLista: !this.state.exibirLista})
  }

  onChangeNome = (event) => {
    this.setState({inputNome: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  render(){
    
  const mostraTela = () => {
    if (this.state.exibirLista){
      return (
        <Lista 
        renderizaApp={this.renderPagina}
        listaUsuarios={this.pegarUsuarios}
        />
      )}else{
      return (
        <Formulario
          renderizaLista={this.renderPagina} 
          pegaInputNome={this.onChangeNome}
          pegaInputEmail={this.onChangeEmail}
          trocaInputNome={this.state.inputNome}
          trocaInputEmail={this.state.inputEmail}
          criaUsuario={this.criarUsuario}
      />
      ); 
    }
  }  
     return (
       <div>
         {mostraTela()}
       </div>
       
     ) 
  }
}

export default App;
