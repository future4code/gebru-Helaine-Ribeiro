import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { CustomError } from "../error/CustomError";
import { MovieInputDTO } from "../model/movieDTO";

export class MovieController {
   createMovie = async(req: Request, res: Response)=> {
    try {
      const { title,description,durationInMinutes,yearOfRelease } = req.body;

      const input: MovieInputDTO ={
        title,
        description,
        durationInMinutes,
        yearOfRelease
      }

      const movieBusiness = new MovieBusiness();

      await movieBusiness.createMovie(input);

      res.status(201).send({ message: "filme cadastrado com sucesso" });

    } catch (error:any) {
      throw new CustomError(error.message || error.sqlMessage, error.statusCode);
    }
  }
}

