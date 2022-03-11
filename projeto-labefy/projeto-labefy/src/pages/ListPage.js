import React from "react";
import axios from "axios";
import styled from "styled-components";



const UserCard = styled.div`
display:flex;
justify-content: space-between;
margin: 10px;
padding: 10px;
border : 1px solid black;
width: 250px;
`

export default class ListPage extends React.Component {
state = {
    playlist: []
}

componentDidMount() {
    this.getAllPlaylists()
}

getAllPlaylists = async () => {
    try{
        const res = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers:{
                Autorization: "helaine-ribeiro-gebru"
            }
        })
        this.setState({playlist: res.data.result.list.name})

    }catch(err){
        console.log(err.res)
    }

 }
 deletePlaylist = async (playlistId) => {
     try{
         const res = await axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}', {
             headers:{
                 Autorization: "helaine-ribeiro-gebru"
             }
         })
         alert('Usuário deletado com suceso')
         this.getAllPlaylists()

     }catch(err) {
         console.log(err.res)
     }
 }

render(){
    const renderLista = this.state.playlist.map((playlists) =>{
        return(
            <UserCard key={playlists.id}>
                <span>{playlists.name}</span>
                <button onClick={() => this.deletePlaylist(playlists.id)}>apagar {playlists.name}</button>
            </UserCard>

        )
    })

    return(
        <div>
            <h3>Tela com a lista de músicas cadasradas</h3>
            {renderLista}
            <button onClick={this.props. goToSignupScreen}>voltar para cadastro</button>
        </div>
    )
 }


}