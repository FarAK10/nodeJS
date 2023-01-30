"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../db/db");
const search_user_1 = require("../helper-functions/search-user");
const new_user_1 = require("../helper-functions/new-user");
const check_user_1 = require("../helper-functions/check-user");
const validation_schema_1 = require("../schemas/validation-schema");
const router = express_1.default.Router();
router.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = (0, search_user_1.searchUser)(id);
    if (user == undefined) {
        res.status(404).send('user not found');
    }
    else {
        res.status(200).json(user);
    }
});
router.delete('/:id', async (req, res) => {
    const body = req.body;
    try {
        const result = await validation_schema_1.authSchema.validateAsync(body);
        const id = req.params.id;
        const user = (0, search_user_1.searchUser)(id);
        if (user == undefined) {
            res.status(404).send('user not found');
        }
        else {
            const isPermitted = (0, check_user_1.checkUser)(user, body);
            if (isPermitted) {
                user.isDeleted = true;
                res.status(202).send('successfully deleted');
            }
            else {
                throw new Error('incorrect password or email');
            }
        }
    }
    catch (err) {
        res.status(422).json({
            message: 'Invalid request',
            data: body
        });
    }
});
router.get('/', (req, res) => {
    res.json(db_1.users);
});
router.post('/', async (req, res) => {
    const body = req.body;
    try {
        const result = await validation_schema_1.userSchema.validateAsync(body);
        const user = (0, new_user_1.createNewUser)(body);
        db_1.users.push(user);
        res.status(200).json({ body });
    }
    catch (err) {
        throw new Error('invalid body format(follow required schema)');
    }
});
exports.default = router;
