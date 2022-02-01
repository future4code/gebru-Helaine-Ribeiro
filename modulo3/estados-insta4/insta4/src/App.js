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
          nomeUsuario={'Cacau'}
          fotoUsuario={'https://picsum.photos/id/1011/5472/3648'}
          fotoPost={'https://picsum.photos/id/0/5616/3744'}
        />

         <Post
          nomeUsuario={'Pol'}
          fotoUsuario={'https://picsum.photos/id/1010/5184/3456'}
          fotoPost={'https://picsum.photos/id/1025/4951/3301'}
        />
        
      </MainContainer>
    );
  }
}

export default App;
