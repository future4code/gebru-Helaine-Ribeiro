import { MovieDatabase } from "../data/MovieDatabase"
import { CustomError } from "../error/CustomError";
//import { v4 as generateId } from 'uuid'
import { generateId } from "../services/generateId";
import { Movie } from "../model/Movie"
import { MovieInputDTO } from "../model/movieDTO"

export class MovieBusiness {
   createMovie = async (input: MovieInputDTO) => {

    try{

      const {title,description,durationInMinutes,yearOfRelease} = input

      if (!title || !description || !durationInMinutes || !yearOfRelease) {
      
        throw new Error("Dados inválidos (title,description,duration_in_minutes,year_of_release)")
      }
    

    const id = generateId()

    const movieDatabase = new MovieDatabase()

const movie = new Movie(id, title,description,durationInMinutes,yearOfRelease)

    await movieDatabase.createMovie(movie)

  } catch (error:any) {
    throw new CustomError(error.message || error.sqlMessage, error.statusCode);
  }
};
}

