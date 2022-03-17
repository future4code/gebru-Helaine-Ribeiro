import React from "react";
import CadastroUsurio from "./components/CadastroUsuario";
import ListaUsuario from "./components/ListaUsuario";

class App extends React.Component {
  state = {
    telaRenderizada: "signup"
  }

chooseScreen = ( )=>{
  switch (this.state.telaRenderizada){
    case "signup":
      return  <CadastroUsurio goToListaUsuario={this.goToListaUsuario} />
      case "listaUsuario":
        return <ListaUsuario goToCadastroUsuario={this.goToCadastroUsuario}/>
        default:
        return <h2>Página não encontrada</h2>
  }
}

goToCadastroUsuario = () =>{
  this.setState({telaRenderizada: "signup"})

}

goToListaUsuario = () =>{
  this.setState({telaRenderizada: "listaUsuario"})

}
// 
  render(){
    return (
      <div>
        <h1>Labenusers</h1>
        {this.chooseScreen()}
      </div>
    )
  }

}

export default App