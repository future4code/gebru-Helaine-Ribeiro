import { Container, Movie, MovieList } from "./styles"
import {useState,useEffect} from 'react'//controlar o estado dentro da nossa aplicação
import {api_key} from '../../config/keys'
import {Link} from "react-router-dom"


function Home() {

    const imagePath = 'https://image.tmdb.org/t/p/w500'

    //variavel de estado guardar como um estado que muda com o tempo
const [movies, setMovies] = useState([])



useEffect(()=>{//consumir a api toda vez que o componente for carregado
fetch(`
https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
.then(response => response.json())
.then(data => {setMovies(data.results)})
}, [])

    return(
        <Container>
            <h1>Movies</h1>
        <MovieList>


{movies.map(movie => {
        return (
          <Movie key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
            </Link>
            <span>{movie.title}</span>
          </Movie>
        )
    })
}

        </MovieList>

        </Container>
        
    )
}

export default Home 

