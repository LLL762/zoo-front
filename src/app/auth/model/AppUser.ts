import { AppRole } from "./AppRole";

export class AppUser {
    username?: string;
    id?: string;
    role?: AppRole;

    constructor(username: string, userId: string, role?: AppRole) {
        this.username = username
        this.id = userId
        this.role = role
    }

    static fromJwt(token: any): AppUser {
        return new AppUser(token.user?.username, token.user?.id, token.user?.role)
    }

}



