import React from 'react'
import CadastroUsurio from './components/CadastroUsuario';
import ListaUsuario from './components/ListaUsuario';

class App extends React.Component {
  state = {
    renderedScreen: 'signUp'
  }

  chooseScreen = () => {
    switch (this.state.renderedScreen) {
      case 'signUp':
        return <CadastroUsurio goToUsersListScreen={this.goToListaUsuario} />
      case 'usersList':
        return <ListaUsuario goToSignUpScreen={this.goToCadastroUsuario} />
      default:
        return <h2>Erro! Página não encontrada!</h2>
    }
  }

  goToSignUpScreen = () => {
    this.setState({ renderedScreen: 'signUp' })
  }

  goToUsersListScreen = () => {
    this.setState({ renderedScreen: 'usersList' })
  }

  render() {
    return (
      <div>
        <h1>LabenUsers - Gebru</h1>
        {this.chooseScreen()}
      </div>
    );
  }
}

export default App
