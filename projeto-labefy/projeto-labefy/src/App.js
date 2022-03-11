
import axios from "axios";
import React from "react";

const urlPlaylist =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "helaine-ribeiro-gebru"
  }
};

export default class App extends React.Component {
  
  state = {
    playlists: [],
    playlistInput: ""
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    axios
      .get(urlPlaylist, headers)
      .then((res) => {
        

        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  createPlaylist = () => {
 
    const body = {
      name: this.state.playlistInput
    };
    axios
      .post(urlPlaylist, body, headers)
      .then((res) => {
        console.log(res.data.result.list);
        alert(`A playlist ${this.state.playlistInput} foi criada com sucesso`);
        this.setState({ playlistInput: "" });
        this.getAllPlaylists();
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  
  onPlaylistTextChange = (event) => {
    this.setState({ playlistInput: event.target.value });
  };

  render() {
    
    const playlistComponents = this.state.playlists.map((play) => {
      
      return <li key={play.id}> {play.name} </li>;
    });

    return (
      <div>
        <h1>Labefy </h1>
        <input
          
          value={this.state.playlistInput}
          placeholder="Digite a sua Playlist"
          onChange={this.onPlaylistTextChange}
        />

        <button onClick={this.createPlaylist}>Enviar</button>
        
        {playlistComponents}
      </div>
    );
  }
}
