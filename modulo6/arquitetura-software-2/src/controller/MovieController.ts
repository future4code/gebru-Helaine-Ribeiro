import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController {
  async createMovie(req: Request, res: Response):Promise<void> {
    try {
      const { title,description,durationInMinutes,yearOfRelease } = req.body;

      const movieBusiness = new MovieBusiness();
      await movieBusiness.createMovie({
        title,
        description,
        durationInMinutes,
        yearOfRelease });

      res.status(201).send({ message: "filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}

/* export class MovieController {
  public createMovie = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = {
        title: req.body.title,
        description: req.body.description,
        durationInMinutes: req.body.durationInMinutes,
        yearOfRelease: req.body.yearOfRelease,
      };

      const movieController = new MovieController()
      await movieController.createMovie(input)

      res.status(201).send({ message: "filme criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
} */