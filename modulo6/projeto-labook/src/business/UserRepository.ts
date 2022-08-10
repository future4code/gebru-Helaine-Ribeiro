import { user } from "../model/types"

export interface UserRepository {
    insertUser(user: user): Promise<void>
}