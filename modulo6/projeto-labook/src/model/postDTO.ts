import { POST_TYPES } from "./types";

export interface PostInputDTO{
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: number,
    authorId: string
}