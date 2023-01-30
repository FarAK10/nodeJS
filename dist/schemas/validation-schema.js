"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authSchema = exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userSchema = joi_1.default.object({
    login: joi_1.default.string().required(),
    password: joi_1.default.string().min(4).alphanum().required(),
    age: joi_1.default.number().min(4).max(130).required()
});
exports.authSchema = joi_1.default.object({
    login: joi_1.default.string().required(),
    password: joi_1.default.string().min(4).alphanum().required(),
});
