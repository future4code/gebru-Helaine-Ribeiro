import { AuthenticationData } from "../model/types";
import * as jwt from "jsonwebtoken";

class Authenticator {
  
     generateToken = (input: AuthenticationData): string => {
        const token = jwt.sign(
          {
            id: input.id,
            role: input.role,
          },
          process.env.JWT_KEY as string,
          {
            expiresIn: process.env.JWT_EXPIRES_IN
          }
        );
        return token;
      }
   /*  generateToken = (payload: AuthenticationData) :string => {
        const token = jwt.sign(
            payload, 
            process.env.JWT_KEY as string, 
            {expiresIn: process.env.JWT_EXPIRES_IN}
        )

        return token
    } */

    getTokenData = (token: string): AuthenticationData => {

        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;

        const result = {
          id: payload.id,
          role: payload.role,
        };
        return result;
      }

    /* getTokenData = (token: string) :AuthenticationData => {
        const result = jwt.verify(
            token, 
            process.env.JWT_KEY as string
        ) as AuthenticationData

        return result
    } */
}

export default new Authenticator()
