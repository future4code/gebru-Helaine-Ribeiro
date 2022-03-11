import React from "react";
import CriarPlaylistPage from "./pages/CriarPlaylistPage";
import ListPage from "./pages/ListPage";

export default class App extends React.Component{
state ={
  renderedScreen: 'signup'
}

escolherTela = () =>{
  switch (this.state.renderedScreen){
    case "signup":
      return <CriarPlaylistPage goToUserListScreen={this.goToUserListScreen}/>
      case 'lista':
        return<ListPage goToSignupScreen={this.goToSignupScreen}/>
        default:
          return( <h2>Erro! Página não encontrada!</h2>)
  }
}

goToSignupScreen = () =>{
  this.setState({renderedScreen: 'signup'})
}

goToUserListScreen =() =>{
  this.setState({renderedScreen: 'lista'})
}

render() {
  return(
    <div>
      <h1>labefy</h1>
      {this.escolherTela()}
    </div>
  )
}

}

