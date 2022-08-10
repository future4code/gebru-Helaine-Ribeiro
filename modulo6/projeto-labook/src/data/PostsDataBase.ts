import { BaseDatabase } from "./BaseDatabase";
import {post} from "../model/types"

export class PostsDataBase extends BaseDatabase {
    private static TABLE_NAME = "labook_posts";

   async createPosts(Post:post):Promise<void> {
    
    await PostsDataBase.connection
    .insert(Post)
   .into(PostsDataBase.TABLE_NAME)
}
}

