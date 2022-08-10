import {post} from "../model/types";

export interface PostRepository{
    createPost(Post:post):Promise<void>
}