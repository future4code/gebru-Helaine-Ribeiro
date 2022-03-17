import React from "react";
import axios from "axios";


export default class CriarPlaylistPage extends React.Component {
 state = {
     playListInput: ""
 }

 handlePlayList = (event) => {
     this.setState({playListInput: event.target.value})
 }

 CriarPlaylist = async () =>{

     const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
     const body ={
         name: this.state.playListInput
     }

     try {
         const res = await axios.post(url, body,{
          headers: {
              Authorization: "helaine-ribeiro-gebru"
          }
         })

         alert(`Playlist ${this.state.playListInput} criado com sucesso`)
         this.setState({playListInput:""})
         
     }catch (err) {
         alert(err.response.data.message)
     }
 }

 render(){
     return(
         <div>
            <div>
                 <h3>Tela de cadastro de playlist</h3>
                 </div>
                 
             <input
             placeholder="insira sua playlist"
              value={this.state.playListInput} onChange={this.handlePlayList}/>
              <button onClick={this.CriarPlaylist}>Adicionar</button>
              <button onClick={this.props.goToUserListScreen}>ir para lista de playlist</button>


         </div>
     )
 }



}