import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: gray;
`
const Inputs = styled.input`
   height: 40px;
   width: 300px;
   border: solid black 2px;
`

const Botao = styled.button`
   height: 40px;
   width: 200px;
`

class App extends React.Component {
  state = {
    usuarios: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "joao",
        fotoUsuario: "https://image.flaticon.com/icons/png/512/74/74472.png",
        fotoPost: "https://cdn.pixabay.com/photo/2017/07/11/17/45/sunset-2494419_960_720.png"
      },
      {
        nomeUsuario: "amanda",
        fotoUsuario: "https://image.flaticon.com/icons/png/512/60/60889.png",
        fotoPost: "https://cdn.pixabay.com/photo/2017/07/13/19/52/sunset-2501729_960_720.png"
      }
    ],
    valorInputNome: "",
    valorInputFotoPessoa: "",
    valorInputLink: ""
  };

   adicionaNovoUsuario = () => {
     const novoUsuario = {
       nomeUsuario: this.state.valorInputNome,
       fotoUsuario: this.state.valorInputFotoPessoa,
       fotoPost: this.state.valorInputLink
     };
     const novaListaUsuarios = [...this.state.usuarios, novoUsuario];
     this.setState({usuarios: novaListaUsuarios})
   }

   onChangeInputNome = (event) => {this.setState({valorInputNome: event.target.value})};

   onChangeInputFoto = (event) => {this.setState({valorInputFotoPessoa: event.target.value})};

   onChangeInputLink = (event) => {this.setState({valorInputLink: event.target.value})}

  render() {
    const listaDeUsuarios= this.state.usuarios.map((usuario) => {
      return (
        <Post
          nomeUsuario= {usuario.nomeUsuario}
          fotoUsuario= {usuario.fotoUsuario}
          fotoPost= {usuario.fotoPost}
        />
      )
    })
    return (
      <MainContainer>
          <Inputs
          value= {this.state.valorInputNome}
          onChange= {this.onChangeInputNome}
          placeholder= {"Nome do usuário"}
          />
          <Inputs 
          value= {this.state.valorInputFotoPessoa}
          onChange= {this.onChangeInputFoto}
          placeholder= {"Foto de perfil"}
          />
          <Inputs 
          value= {this.state.valorInputLink}
          onChange= {this.onChangeInputLink}
          placeholder= {"Foto do post"}
          />
          <Botao onClick= {this.adicionaNovoUsuario}>Adicionar</Botao>
       <div>{listaDeUsuarios}</div>
      </MainContainer>
    );
  }
}

export default App;
