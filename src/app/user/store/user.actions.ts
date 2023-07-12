import { User } from "src/app/models/user";

export class userLogin{
    static readonly type = `[User] ${userLogin.name}`
    constructor(public readonly userCredentials: User){}
}
