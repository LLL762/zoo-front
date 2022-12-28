export class AppRole {
    roleCore?: AppRoleCore;
    accessLevel: number;

    constructor(roleName: AppRoleCoreName, accessLevel?: number) {
        this.roleCore = appRolesCore.find(role => role.name === roleName);
        this.accessLevel = accessLevel ?? 0;
    }

    static fromJwt(jwt: any): AppRole | undefined {
        return isRoleName(jwt.role?.name) ? new AppRole(jwt.role.name, jwt.accessLevel)
            : undefined;
    }
}

const appRolesCore = [
    { name: "TRASH", score: 0 },
    { name: "STAFF", score: 10 },
    { name: "ADMIN", score: 20 },
    { name: "GOD", score: 1000 }
] as const;

type AppRoleCore = typeof appRolesCore[number];
type AppRoleCoreName = typeof appRolesCore[number]["name"];

const isRoleName = (roleName: string | undefined): boolean => {
    return typeof roleName !== "undefined"
        && typeof appRolesCore.find(role => role.name === roleName) !== "undefined"
}