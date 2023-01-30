"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewUser = void 0;
const uuid_1 = require("uuid");
function createNewUser(body) {
    const id = (0, uuid_1.v4)();
    return {
        ...body,
        id: id,
        isDeleted: false
    };
}
exports.createNewUser = createNewUser;
