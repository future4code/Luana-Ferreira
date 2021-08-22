import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Page = styled.div`
   display: flex;
   flex-wrap: wrap;
 `
const Header = styled.div`
   background-color: green;
   color: white;
   height: 8.5vh;
   width: 100vw;
   font-size: 40px;
   font-weight: bold;
   text-align: center;
 `
const Sidebar = styled.div`
   background-color: rgb(18, 18, 18);
   color: rgb(179, 179, 179);
   height: 91.5vh;
   width: 200px;
   display: flex;
   flex-direction: column;
   flex-shrink: 0;
 `
const Main = styled.div`
   background-color: rgb(24, 24, 24);
   color: rgb(237, 237, 237);
   flex-grow: 1;
   height: 91.5vh;
   flex-shrink: 10;
   padding: 50px;
 `
const CriarPlaylist = styled.div`
   margin: 0 10px 10px 10px;
   font-weight: bold;
   justify-self: flex-end;
 `
const LabelCriarPlaylist = styled.label`
   font-size: 17px;
   text-align: left;
   margin-left: 10px;
 `
const InputCriaPlaylist = styled.input`
   width: 100px;
   font-size: 12px;
   background-color: black;
   color: rgb(179, 179, 179);
   margin: 6px 3px 0 10px;
 `
const BotaoCriaPlaylist = styled.button`
   width: 45px;
   background-color: black;
   color: rgb(179, 179, 179);
 `
const ListaPlaylists = styled.label`
   margin: 10px;
 `
const LabelPlaylists = styled.label`
   font-size: 17px;
   text-align: left;
   font-weight: bold;
   margin-left: 10px;
 `
const CadaPlaylist = styled.ul`
   list-style: none;
   margin: 15px -30px;
 `
const LinhaPlaylist = styled.li`
   margin: 10px 0 0 0;
   width: 152px;
   display: flex;
   justify-content: space-between;
 `
const HomeButton = styled.label`
   font-size: 17px;
   text-align: left;
   font-weight: bold;
   margin: 20px;
 `
const DeleteButton = styled.span`
   color: rgb(179, 179, 179); 
 `
const PlaylistName = styled.h2`
 font-size: 70px;
 margin: 0 0 30px 0;
 `
const LinhaMusica = styled.li`
 margin: 10px 0 10px 20px;
 width: 500px;
 display: flex;
 justify-content: space-between;
 `
const LinhaMusicaArtista = styled.p`
 margin: 30px 0 0 4px;
 width: 580px;
 display: flex;
 justify-content: space-between;
 `
const QuebraEntreMusicas = styled.hr`
 opacity: 20%;
 border: none;
 height: 1px;
 color: rgb(179, 179, 179);
 background-color: rgb(179, 179, 179);
 `
const AddTitle = styled.h3`
 margin: 40px 0 5px 0;
 `
const PlayPauseButton = styled.span`
 color: rgb(179, 179, 179); 
 `

const axiosConfig = {
  headers: {
    Authorization: "luana-ferreira-johnson"
  }
}

export class App extends React.Component {
  state = {
    playlists: [],
    musicas: [],
    valorInputPlaylist: '',
    tituloPlaylist: '',
    mostraHome: true,
    inputMusica: '',
    inputArtista: '',
    inputURL: '',
    idPlaylist: '',
    musicaTocando: false,
    qualMusica: '',
  }

  componentDidMount = () => {
    this.pegarPlaylists()
  }

  adicionaPlaylist = () => {
    const body = {
      name: this.state.valorInputPlaylist
    }
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      body, axiosConfig
    )
      .then(() => {
        this.setState({ valorInputPlaylist: "" })
        this.pegarPlaylists()
      })
      .catch((error) => {
        alert("Falha ao criar playlist")
        console.log(error.message)
      })
  }

  pegarPlaylists = () => {
    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      axiosConfig
    )
      .then((response) => {
        this.setState({ playlists: response.data.result.list })
      })
      .catch((error) => {
        alert("Falha ao pegar playlists")
        console.log(error.message)
      })
  }

  deletarPlaylist = (playlistid) => {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistid}`,
      axiosConfig
    )
      .then(() => {
        this.pegarPlaylists()
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  doisEmUm = (playlist) => {
    this.setState({ mostraHome: false })
    axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`,
      axiosConfig
    )
      .then((response) => {
        this.setState({ musicas: response.data.result.tracks })
        this.setState({ idPlaylist: playlist.id })
      })
      .catch((error) => {
        alert("Falha ao exibir músicas da playlist")
        console.log(error.message)
      })
    this.setState({ tituloPlaylist: playlist.name })
  }

  onChangeInputPlaylist = event => {
    this.setState({ valorInputPlaylist: event.target.value })
  }

  onChangeInputMusica = event => {
    this.setState({ inputMusica: event.target.value })
  }

  onChangeInputArtista = event => {
    this.setState({ inputArtista: event.target.value })
  }

  onChangeInputURL = event => {
    this.setState({ inputURL: event.target.value })
  }

  adicionaMusica = () => {
    const body = {
      name: this.state.inputMusica,
      artist: this.state.inputArtista,
      url: this.state.inputURL
    }
    axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`,
      body, axiosConfig
    )
      .then(() => {
        this.setState({ inputMusica: "", inputArtista: "", inputURL: "" })
        axios.get(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`,
          axiosConfig
        )
          .then((response) => {
            this.setState({ musicas: response.data.result.tracks })
          })
          .catch((error) => {
            alert("Falha ao exibir músicas da playlist")
            console.log(error.message)
          })
      })
      .catch((error) => {
        alert("Falha ao adicionar música")
        console.log(error.message)
      })
  }

  deletarMusica = (musicaid) => {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks/${musicaid}`,
      axiosConfig
    )
      .then(() => {
        axios.get(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`,
          axiosConfig
        )
          .then((response) => {
            this.setState({ musicas: response.data.result.tracks })
          })
          .catch((error) => {
            alert("Falha ao exibir músicas da playlist")
            console.log(error.message)
          })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  playMusica = (url) => {
    const urlMusica = url;
    const audio = new Audio(urlMusica);

    audio.play();
    this.setState({ qualMusica: audio });
    this.setState({ musicaTocando: true })
  }

  pauseMusica = () => {
    this.state.qualMusica.pause();
    this.setState({ musicaTocando: false })
  }

  render() {
    const PlayPause = url => !this.state.musicaTocando ?
      <PlayPauseButton onClick={() => this.playMusica(url)}>▶</PlayPauseButton>
      : <PlayPauseButton onClick={this.pauseMusica}>∥</PlayPauseButton>

    const trocaTela = () => {
      if (this.state.mostraHome) {
        return (
          <p>Bem vinde ao Labefy, selecione ao lado a playlist que deseja ouvir</p>
        )
      } else {
        return (
          <div>
            <PlaylistName>{this.state.tituloPlaylist}</PlaylistName>
            <LinhaMusicaArtista>P L A Y<span>M Ú S I C A</span><span>A R T I S T A</span><span>D E L E T A R</span></LinhaMusicaArtista>
            <hr />
            {this.state.musicas.map((musica) => {
              return (
                <div><LinhaMusica key={musica.id}>
                  {PlayPause(musica.url)}
                  {musica.name}<span>{musica.artist}</span>
                  <DeleteButton onClick={() => { this.deletarMusica(musica.id) }}>x</DeleteButton>
                </LinhaMusica><QuebraEntreMusicas />
                </div>
              )
            })}
            <div>
              <AddTitle>Adicionar músicas à playlist:</AddTitle>
              <input
                placeholder="Nome da Música"
                onChange={this.onChangeInputMusica}
                value={this.state.inputMusica}
              />
              <input
                placeholder="Nome do Artista"
                onChange={this.onChangeInputArtista}
                value={this.state.inputArtista}
              />
              <input
                placeholder="Link da Música"
                onChange={this.onChangeInputURL}
                value={this.state.inputURL}
              />
              <button onClick={this.adicionaMusica}>Adicionar Música</button>
            </div>
          </div>
        )
      }
    }

    return (
      <Page>
        <Header>Labefy</Header>
        <Sidebar>
           <HomeButton onClick={() => { this.setState({ mostraHome: true }) }}>Home</HomeButton>
          <ListaPlaylists>
            <LabelPlaylists>Playlists</LabelPlaylists>
            <CadaPlaylist>
              {this.state.playlists.map((playlist) => {
                return (
                  <LinhaPlaylist onClick={() => { this.doisEmUm(playlist) }} key={playlist.id}>
                    {playlist.name}
                    <DeleteButton onClick={() => { this.deletarPlaylist(playlist.id) }}>x</DeleteButton>
                  </LinhaPlaylist>
                )
              })}
            </CadaPlaylist>
          </ListaPlaylists>
          <CriarPlaylist>
            <LabelCriarPlaylist>Criar nova playlist:</LabelCriarPlaylist>
            <InputCriaPlaylist
              placeholder="Nome da Playlist"
              onChange={this.onChangeInputPlaylist}
              value={this.state.valorInputPlaylist}
            />
            <BotaoCriaPlaylist
              onClick={this.adicionaPlaylist}>Criar</BotaoCriaPlaylist>
          </CriarPlaylist>
        </Sidebar>
        <Main>
          {trocaTela()}
        </Main>
      </Page>
    );
  }
}

export default App;
