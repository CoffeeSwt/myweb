"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const roles_decorator_1 = require("../../../common/decorators/roles.decorator");
const jwt_1 = require("@nestjs/jwt");
const jwt_config_1 = require("../../../config/jwt.config");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const User_1 = require("../../../models/User");
let RolesGuard = exports.RolesGuard = class RolesGuard {
    constructor(reflector, jwtService, jwtConfiguration, userModel) {
        this.reflector = reflector;
        this.jwtService = jwtService;
        this.jwtConfiguration = jwtConfiguration;
        this.userModel = userModel;
    }
    async canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(roles_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token)
            throw new common_1.UnauthorizedException();
        const payload = await this.jwtService.verifyAsync(token, this.jwtConfiguration);
        const user = await this.userModel.findById(payload.sub).exec();
        const flag = requiredRoles.some((role) => user?.roles?.includes(role));
        if (!flag)
            throw new common_1.ForbiddenException();
        return true;
    }
    extractTokenFromHeader(request) {
        const [_, token] = request.headers.authorization?.split(' ') ?? [];
        return token;
    }
};
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(jwt_config_1.default.KEY)),
    __param(3, (0, nestjs_typegoose_1.InjectModel)(User_1.User)),
    __metadata("design:paramtypes", [core_1.Reflector,
        jwt_1.JwtService, void 0, Object])
], RolesGuard);
//# sourceMappingURL=roles.gurad.js.map