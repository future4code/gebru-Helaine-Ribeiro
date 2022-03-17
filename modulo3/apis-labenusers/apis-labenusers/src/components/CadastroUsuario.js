import React from "react";
import axios from "axios";
import Styled from "styled-components"

const UserCard = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  width: 250px;
  align-items: center;
  margin: 50px ;
`

class CadastroUsurio extends React.Component{
    state = {
        nameInput: '',
        emailInput: ''
      }
    
      handleNameInput = (event) => {
        this.setState({ nameInput: event.target.value })
      }
    
      handleEmailInput = (event) => {
        this.setState({ emailInput: event.target.value })
      }
    
      createUser = async () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    
        const body = {
          name: this.state.nameInput,
          email: this.state.emailInput
        }
    

     try {
        const res = await axios.post(url, body, {
          headers: {
            Authorization: 'helaine-ribeiro-gebru'
          }
        })
  
        alert(`Usuárie ${this.state.nameInput} criade com sucesso!`)
        this.setState({ nameInput: '', emailInput: '' })
      } catch (err) {
        alert(err.response.data.message)
      }
  
 // utilizado abaixo da variavel const body no lugar de try{}
  //      axios
  //       .post(url, body,{
  //           headers:{
  //               Authorization: "helaine-ribeiro-gebru"

  //           }

  //         })
  // //51 minutos
  //         .then(res => {
  //             alert(`usuario ${this.state.nameInput} criado com sucesso`)
  //             this.setState({nameInput: "", emailInput: ""})
            
//         })
//         .catch(err => alert(err.response.data.message))
 }

    render(){
        return(
            <div>
            <button onClick={this.props.goToListaUsuario}>Ir para lista de usuários cadastrados</button>
                <UserCard>
                    <h4>Nome:<input placeholder="Insira seu nome" value={this.state.nameInput} onChange ={this.handleNameInput}/></h4>
                    <h4>Email:<input placeholder="Insira seu email"value={this.state.emailInput} onChange ={this.handleEmailInput}/></h4>
                    <button onClick={this.createUser}>Cadastrar</button>
                </UserCard>
                
            </div>
        )
    }
}

export default CadastroUsurio