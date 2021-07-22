import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post 
          nomeUsuario={'joao'}
          fotoUsuario={'https://image.flaticon.com/icons/png/512/74/74472.png'}
          fotoPost={'https://cdn.pixabay.com/photo/2017/07/11/17/45/sunset-2494419_960_720.png'}
        />
        <Post 
        nomeUsuario={'amanda'}
        fotoUsuario={'https://image.flaticon.com/icons/png/512/60/60889.png'}
        fotoPost={'https://cdn.pixabay.com/photo/2017/07/13/19/52/sunset-2501729_960_720.png'}
        />
      </MainContainer>
    );
  }
}

export default App;
