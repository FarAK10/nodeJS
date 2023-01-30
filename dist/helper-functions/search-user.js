"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchUser = void 0;
const db_1 = require("../db/db");
function searchUser(id) {
    const user = db_1.users.find(user => user.id === id);
    return user;
}
exports.searchUser = searchUser;
