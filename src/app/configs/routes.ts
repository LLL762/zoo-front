export class AppRoutes {
    static routes = {
        base: "zoo",
        home: "",
        login: "/login",
        tasks: "/tasks",
        zoneMap: "/zones"
    } as const;

    static getUri(routeName: keyof typeof AppRoutes.routes) {
        const routes = AppRoutes.routes;
        return routeName == "base" ? routes.base : routes.base + routes[routeName];
    }
}



