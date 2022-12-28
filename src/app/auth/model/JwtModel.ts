const expectedBearerKeys = ["exp", "username", "id"];
const expectedRefreshKeys = ["username", "exp"];

const isBearerAsExpected = (bearer: any): boolean => {
    const bearerKeys = Object.keys(bearer);
    return expectedBearerKeys.some(key => bearerKeys.includes(key));
}

const isRefreshAsExpected = (bearer: any): boolean => {
    const bearerKeys = Object.keys(bearer);
    return expectedRefreshKeys.some(key => bearerKeys.includes(key));
}

