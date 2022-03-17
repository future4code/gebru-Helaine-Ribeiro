import React, {useState} from 'react'
import styled from "styled-components"


const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`
/**funcionalidade de criar comentários.
criar input controlado no componente SecaoComentario */
const SecaoComentario =(props)=> {

		const [inputValue, setInputValue]= useState("")
	
/**função que muda o valor inicial do estado, recebendo como parâmetro o event.target.value */
	const onChangeComentario = (event) => { 
		setInputValue(event.target.value)
	}

	return (
        <CommentContainer>
            <InputComment
                className={'input-comentario'}
                placeholder={'Comentário'}
                value={inputValue}
                onChange={onChangeComentario}
            />
 {/** quando o valor do input controlado já estiver sendo guardado no estado, precisamos colocar
   esse valor do estado como parâmetro da função enviarComentario, que está chegando 
   via props e sendo chamada no onClick do botão enviar. */} 
            <button onClick={() => { props.enviarComentario(inputValue) }} >Enviar</button>
        </CommentContainer>
     )
		}
export default SecaoComentario