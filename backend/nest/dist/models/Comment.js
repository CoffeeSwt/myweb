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
var Comment_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const User_1 = require("./User");
const Blog_1 = require("./Blog");
let Comment = exports.Comment = Comment_1 = class Comment {
};
__decorate([
    (0, typegoose_1.prop)({ required: true, ref: () => User_1.User }),
    __metadata("design:type", Object)
], Comment.prototype, "user", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, ref: () => Blog_1.Blog }),
    __metadata("design:type", Object)
], Comment.prototype, "blog", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => Comment_1 }),
    __metadata("design:type", Object)
], Comment.prototype, "comment", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Comment.prototype, "content", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], Comment.prototype, "star", void 0);
exports.Comment = Comment = Comment_1 = __decorate([
    (0, typegoose_1.modelOptions)({ schemaOptions: { collection: 'comments', timestamps: true } })
], Comment);
//# sourceMappingURL=Comment.js.map