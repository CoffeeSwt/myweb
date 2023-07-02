"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt_config_1 = require("../../config/jwt.config");
const config_1 = require("@nestjs/config");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const roles_gurad_1 = require("../auth/guards/roles.gurad");
const core_1 = require("@nestjs/core");
const comment_controller_1 = require("./comment.controller");
const comment_service_1 = require("./comment.service");
let BlogModule = exports.BlogModule = class BlogModule {
};
exports.BlogModule = BlogModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([Comment]),
            config_1.ConfigModule.forFeature(jwt_config_1.default),
            jwt_1.JwtModule.registerAsync(jwt_config_1.default.asProvider()),
        ],
        controllers: [comment_controller_1.CommentController],
        providers: [
            comment_service_1.CommentService,
            {
                provide: core_1.APP_GUARD,
                useClass: roles_gurad_1.RolesGuard,
            },
        ],
    })
], BlogModule);
//# sourceMappingURL=comment.module.js.map