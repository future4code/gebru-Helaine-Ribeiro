import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {api_key} from '../../config/keys'
import { Container } from './styles';

function Details() {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
   .then(response => response.json())
    .then(data => {
      const {title, poster_path, release_date, overview} = data
      const movie = {
        id,
        title,
        image: `${imagePath}${poster_path}`,
        sinopse: overview,
        releaseDate: release_date
      }
      setMovie(movie)
    })
  }, [id])
  //toda vez que o id mudar chama o useeffect para fazer uma nova requisição
    
  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse}/>
      
      <div className="details">
        <h1>{movie.title}</h1>
        <span>Sinopse: {movie.sinopse}</span>
        <span className='release-date'>Release date: {movie.releaseDate}</span>
        <Link to="/"><button>Go Back</button></Link>
      </div>

    </div>
    </Container>
  );
}



export default Details ;

