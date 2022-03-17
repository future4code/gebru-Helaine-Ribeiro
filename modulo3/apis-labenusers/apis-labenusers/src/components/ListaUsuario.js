import React from "react";
import axios from "axios";
import Styled from "styled-components"


const UserCardList = Styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  width: 250px;
  align-items: center;
`


class ListaUsuario extends React.Component {
    state = {
        usersList: []
      }
    
      componentDidMount() {
        this.getAllUsers()
      }
    
      getAllUsers = async () => {
        try {
          const res = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
              Authorization: 'helaine-ribeiro-gebru'
            }
          })
    
          this.setState({ usersList: res.data })
        } catch (err) {
          console.log(err.response)
        }
    
        // axios
        //   .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        //     headers: {
        //       Authorization: 'helaine-ribeiro-gebru'
        //     }
        //   })
        //   .then(res => {
        //     this.setState({ usersList: res.data })
        //   })
        //   .catch(err => console.log(err.response))
      }
    
      deleteUser = async (userId) => {
        try {
          const res = await axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
            headers: {
              Authorization: 'helaine-ribeiro-gebru'
            }
          })
    
          alert('Usuárie deletade com sucesso!')
          this.getAllUsers()
        } catch (err) {
          console.log(err.response)
        }
    
        // axios
        //   .delete(
        //     `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
        //     headers: {
        //       Authorization: 'helaine-ribeiro-gebru'
        //     }
        //   })
        //   .then(res => {
        //     alert('Usuárie deletade com sucesso!')
        //     this.getAllUsers()
        //   })
        //   .catch(err => console.log(err.response))
      }
    
      render() {
        const renderedUsersList = this.state.usersList.map((user) => {
          return (
            <UserCardList key={user.id}>
              <span>{user.name}</span>
              <button onClick={() => this.deleteUser(user.id)}>X</button>
            </UserCardList>
          )
        })
    
        return (
          <div>
            <h3>Usuários cadastrados:</h3>
            {renderedUsersList}
            <button onClick={this.props.goToCadastroUsuario} >Voltar</button>
          </div>
        )
      }
    }
    

export default ListaUsuario