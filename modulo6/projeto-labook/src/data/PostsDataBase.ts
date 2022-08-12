import { BaseDataBase } from "./BaseDatabase";
import {post} from "../model/types"

export class PostsDataBase extends BaseDataBase {
    private static TABLE_NAME = "labook_posts";

   async createPosts(Post:post):Promise<void> {
    
    await BaseDataBase.connection
    .insert(Post)
   .into(PostsDataBase.TABLE_NAME)
}
}

