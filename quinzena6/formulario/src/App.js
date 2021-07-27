import React from 'react'
import styled from 'styled-components';
import Etapa1 from './pages/Etapa1';
import Etapa2 from './pages/Etapa2';
import Etapa3 from './pages/Etapa3';
import Final from './pages/Final';

const Pagina = styled.div`
  text-align: center;
`

class App extends React.Component{
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa){
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
    }
  }

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  }

  render(){
    return (
      <Pagina>
        {this.renderizaEtapa()}
        <br />
        {this.state.etapa !== 4 && (
        <button onClick={this.irParaProximaEtapa}
        >Próxima etapa
        </button>
        )}
      </Pagina>
    );
  }
}

export default App;
