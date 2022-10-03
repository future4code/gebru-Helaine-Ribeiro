import { Movie } from "../model/Movie"


export interface MovieRepository {
    createMovie(movie: Movie):Promise<void>
}