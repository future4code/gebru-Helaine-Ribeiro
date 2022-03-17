import React, {useState} from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from '../Post/styled'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
 
    const [curtido, setCurtido ] = useState(false); // usado para a lógica de mudança de cor do coração e o aumento/diminuição do número de curtidas
    const [numeroCurtidas, setNumeroCurtidas]= useState(0); // número de curtidas do post. Varia entre 0 e 1. 
    const [comentando, setComentando] = useState(false); // usado para a lógica de abrir ou fechar a caixa de comentário
    const [numeroComentarios, setNumeroComentarios]= useState(0); // número de comentários do post.
    const [comentarios, setComentarios]= useState([]); // responsável por guardar a lista de comentários feitos no post
  
// cria a lógica de mudar a cor do ícone de curtida para preto ou branco, de acordo com a curtida ou descurtida do usuário.
  const onClickCurtida = () => {
    
    // verifica se, no estado, cutido é true ou false
    if (curtido) {

      // se for true, entra nesse caso, e o estado é modificado de acordo com esses comandos:
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas - 1)
      
    } else {

      // se for false, entra nesse caso, e o estado é modificado de acordo com esses comandos:
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas + 1)
    
    }
    }
  
  // método chamado quando o ícone de comentário é clicado. Responsável por mudar a caixa de comentário entre input/botão de enviar e os comentários do post.
  // muda o valor de comentando no estado, de true para false ou de false para true.
  const onClickComentario = () => {
   
      setComentando(!comentando)
    
  }

  // recebe como parâmetro um comentário, que vem do componente SecaoComentario. Com esse parâmetro, o método
  // o inclui na lista de comentários do estado, com a desestruturacao e o this.setState. 
  const enviarComentario = (comentario) => {
  
    setNumeroComentarios(numeroComentarios + 1)
    const listaDeComentarios = [...comentarios, comentario]
     setComentando(false)
     setComentarios(listaDeComentarios)
    
  }

    // De acordo com a propriedade curtido do estado, o valor muda entre  iconeCoracaoPreto e o iconeCoracaoBranco, 
     
    const iconeCurtida = curtido ? iconeCoracaoPreto : iconeCoracaoBranco

  // responsável pela lógica de mudança da caixa de comentário entre input e comentários
    const caixaDeComentario = comentando ? (
      // expressão condicional que, de acordo com o valor de comentando no estado, renderiza o componente
      // Componente com o input e botão de enviar novo comentario.
      <SecaoComentario enviarComentario={enviarComentario}/>
    ) : (
      comentarios.map((comentario) => {
      // Funcao map sendo feita na propriedade comentarios do estado. Ou seja, está sendo pego todos os
      // comentários do estado para serem renderizados na tela, dentro do componente CommentContainer 
      
        return (
          <CommentContainer>{/**arquivo  syled.js*/}
            <p>{comentario}</p>
          </CommentContainer>
        )
      })
    )
/**Para que esse componente fique pronto, basta passar os valores do estado numeroCurtidas e numerComentarios 
 * como props para os dois componentes (IconeComContador) relacionados aos ícones.  */

    return (
      <PostContainer>
        <PostHeader>{/*guarda a foto de perfil do usuário e o nome do usuário*/}
          
          <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>{/*guarda a imagem do post*/}
          <p>{props.nomeUsuario}</p>
        </PostHeader>
  
        <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>
  
        <PostFooter>{/**guarda os ícone de curtida e comentário */}

          <IconeComContador 
            icone={iconeCurtida}
            onClickIcone={onClickCurtida}
            valorContador={numeroCurtidas}
          />

      {/**IconeComContador: chama o arquivo IconeComContador da outra pasta */}
          <IconeComContador
            icone={iconeComentario}
            onClickIcone={onClickComentario}
            valorContador={numeroComentarios}
          
          />
        </PostFooter>
         {caixaDeComentario} 
      </PostContainer>
    )
  }
  
  export default Post
  