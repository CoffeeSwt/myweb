"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt_config_1 = require("../../config/jwt.config");
const config_1 = require("@nestjs/config");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const User_1 = require("../../models/User");
const roles_gurad_1 = require("../auth/guards/roles.gurad");
const core_1 = require("@nestjs/core");
let UserModule = exports.UserModule = class UserModule {
};
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([User_1.User]),
            config_1.ConfigModule.forFeature(jwt_config_1.default),
            jwt_1.JwtModule.registerAsync(jwt_config_1.default.asProvider()),
        ],
        controllers: [user_controller_1.UserController],
        providers: [
            user_service_1.UsersService,
            {
                provide: core_1.APP_GUARD,
                useClass: roles_gurad_1.RolesGuard,
            },
        ],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map