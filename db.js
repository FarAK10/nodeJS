import {Pool} from 'pg';

export const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'students',
    password:'farhod102003',
    port:5000,
})