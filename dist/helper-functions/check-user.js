"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUser = void 0;
function checkUser(user, credentials) {
    if (user.login === credentials.login && user.password === credentials.password)
        return true;
    return false;
}
exports.checkUser = checkUser;
