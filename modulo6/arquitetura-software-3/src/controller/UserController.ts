import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CustomError } from "../error/CustomError";
import { UserInputDTO } from "../model/userDTO";

export class UserController {
  constructor(private userBusiness: UserBusiness){}

 create = async (req: Request, res: Response)=> {

    try {
      const { email, name, password } = req.body;

      const input: UserInputDTO ={
        email, name, password
      }

      //const userBusiness = new UserBusiness();

      await this.userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error:any) {
     throw new CustomError(error.message || error.sqlMessage, error.statusCode);
    }
  }
}

