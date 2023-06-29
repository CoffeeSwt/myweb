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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt_config_1 = require("../../config/jwt.config");
const hashing_service_1 = require("./hashing.service");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const User_1 = require("../../models/User");
const constants_1 = require("../../constants");
let AuthService = exports.AuthService = class AuthService {
    constructor(userModel, jwtService, jwtConfiguration, hashingService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
        this.jwtConfiguration = jwtConfiguration;
        this.hashingService = hashingService;
    }
    async create(createUserDto) {
        const user = await this.userModel.findOne({ username: createUserDto.username }).exec();
        if (user) {
            return 'User has already exist,please login.';
        }
        const hashedPassword = await this.hashingService.hash(createUserDto.password);
        createUserDto.state = 'activate';
        createUserDto.password = hashedPassword;
        createUserDto.roles = [constants_1.Role.Normal];
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }
    async login(user) {
        const { username, password } = user;
        const userFind = await this.userModel.findOne({ username }).exec();
        if (!userFind)
            return new common_1.ForbiddenException();
        const isEqual = await this.hashingService.compare(password, userFind.password);
        if (!isEqual)
            return new common_1.ForbiddenException();
        return await this.generateTokens(userFind);
    }
    async generateTokens(user) {
        const token = await this.signToken(user._id, { name: user.username });
        return { token: `Bearer ${token}` };
    }
    async signToken(userId, payload) {
        return await this.jwtService.signAsync({
            sub: userId,
            ...payload,
        }, {
            secret: this.jwtConfiguration.secret,
            audience: this.jwtConfiguration.audience,
            issuer: this.jwtConfiguration.issuer,
            expiresIn: this.jwtConfiguration.accessTokenTtl,
        });
    }
    async validateUser(username, password) {
        const userFind = await this.userModel.findOne({ username }).exec();
        if (!userFind)
            return null;
        const isEqual = await this.hashingService.compare(password, userFind.password);
        if (!isEqual)
            return null;
        return userFind;
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(User_1.User)),
    __param(2, (0, common_1.Inject)(jwt_config_1.default.KEY)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService, void 0, hashing_service_1.HashingService])
], AuthService);
//# sourceMappingURL=auth.service.js.map