
import React from 'react'
import styled from 'styled-components'

const MensagemCard = styled.div`
  display: flex;
  border: 1px solid gray;
  margin: 8px auto;
  padding: 0 8px;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  
`

const AgeText = styled.p`
  color: green;

`
const Botao= styled.button`
font-size: 8px;
width: 10%;
height: 10%;
background: yellowgreen;
border-radius: 50px;
`
class App extends React.Component {
  state = {
    inputRemetente: '',
    inputConteudo: '',
    conversaState: [
      { id: 1, remetente: '', conteudo: '' },
     
    ]
  }

  guardaRemetente = (event) => {
    this.setState({ inputRemetente: event.target.value })
  }

  guardaConteudo = (event) => {
    this.setState({ inputConteudo: event.target.value })
  }

  addMensagem = () => {
    // Criamos a nova pessoa instrutora pegando as infos dos inputs
    const novaMensagem = {
      id: Math.random(),
      remetente: this.state.inputRemetente,
    conteudo: this.state.inputConteudo
    }

    // Criamos uma cópia do estado e adicionamos a nova pessoa instrutora
    const copia = [...this.state.conversaState, novaMensagem]
    // copia.push(newTeacher)

    // Salvamos o array modificado no estado
    this.setState({  conversaState: copia })

    // Limpamos os inputs de nome e idade
    this.setState({ inputRemetente: '', inputConteudo: '' })
  }

  deleteMensagem = (idDaMensagemParaApagar) => {
    const copia = [...this.state.conversaState]

    const novaMensagemList = copia.filter((mensagem) => {
      return mensagem.id !== idDaMensagemParaApagar
    })

    this.setState({  conversaState: novaMensagemList })
  }

  render() {
    const mensagem = this.state.conversaState.map((mensagem) => {
      return (
        <MensagemCard key={mensagem.id}>
          <p>{mensagem.remetente}</p>
          <AgeText>{mensagem.conteudo}</AgeText>
          <Botao onClick={() => this.deleteMensagem(mensagem.id)}>X</Botao>
        </MensagemCard>
      )
    })

    return (
      <div>
        <h3>Conversas</h3>
        <input
          placeholder={'remetente'}
          value={this.state.inputRemetente}
          onChange={this.guardaRemetente}
        />
        <input
          placeholder={'conteudo'}
          value={this.state.inputConteudo}
          onChange={this.guardaConteudo}
        />
        <button onClick={this.addMensagem}>Enviar</button>
        {mensagem}
      </div>
    )
  }
}

export default App