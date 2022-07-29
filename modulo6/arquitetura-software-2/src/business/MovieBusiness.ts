import { MovieDatabase } from "../data/MovieDatabase"
import { v4 as generateId } from 'uuid'
import { Movie } from "../types/Movie"

export class MovieBusiness {
  async createMovie({ title,description,durationInMinutes,yearOfRelease }: any):Promise<void> {

    if (!title || !description || !durationInMinutes || !yearOfRelease) {
      
      throw new Error("Dados inválidos (title,description,duration_in_minutes,year_of_release)")
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase()

const movie = new Movie(id, title,description,durationInMinutes,yearOfRelease)

    await movieDatabase.createMovie(movie)
  }

}

/* export class MovieBusiness {
  public createMovie = async (input: any) => {
     try {
      const { title,
        description,
        durationInMinutes,
        yearOfRelease} = input
      if (
         !title ||
         !description ||
         !durationInMinutes ||
         !yearOfRelease
      ) {
         throw new Error('"title", "description", "yearOfRelease" e "durationInMinutes" são obrigatórios')
      }

      const id = generateId()

      const movieDatabase = new MovieDatabase()
      await movieDatabase.createMovie({
         id,
         title,
         description,
         durationInMinutes,
         yearOfRelease,
      })
     } catch (error: any) {
       throw new Error(error.message);
     }
   };
  }
 */