"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = void 0;
const config_1 = require("@nestjs/config");
exports.jwtConstants = {
    secret: '' + process.env.JWT_SECRET,
    audience: '' + process.env.JWT_TOKEN_AUDIENCE,
    issuer: '' + process.env.JWT_TOKEN_ISSUER,
    accessTokenTtl: 3600,
};
exports.default = (0, config_1.registerAs)('jwt', () => {
    return exports.jwtConstants;
});
//# sourceMappingURL=jwt.config.js.map