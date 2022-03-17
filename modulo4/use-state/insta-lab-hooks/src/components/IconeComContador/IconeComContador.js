import React from 'react'
import styled from "styled-components"

const IconeContainer = styled.div`
	display: flex;

	img {
		margin-right: 5px;
	}
`
/**Para que esse componente fique pronto, basta passar os valores do estado numeroCurtidas e 
numerComentarios como props para os dois componentes (IconeComContador) relacionados aos ícones.  */
const IconeComContador =(props) => {
	return <IconeContainer>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</ IconeContainer>
}

export default IconeComContador