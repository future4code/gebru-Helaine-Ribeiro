import React from "react";
import axios from "axios";
import {BASE_URL} from "../constants/Urls"

export default class CriarPlaylistPage extends React.Component {
 state = {
     playlistInput: ""
 }

 handlePlaylist = (event) => {
     this.setState({playlist: event.target.value})
 }

 CriarPlaylist = async () =>{

     const url = ({BASE_URL})
     const body ={
         playlist: this.state.playlistInput
     }

     try{
         const res = await axios.post(url, body,{
          headers: {
              Authorization: "helaine-ribeiro-gebru"
          }
         })

         alert(`Playlist ${this.state.playlistInput} criado com sucesso`)
         this.setState({playlistInput:""})
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
              value={this.state.playlistInput} onChange={this.handlePlaylist}/>
              <button onClick={this.CriarPlaylist}>Adicionar</button>
              <button >ir para lista de playlist</button>


         </div>
     )
 }



}