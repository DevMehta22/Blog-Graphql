const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host:process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
}).promise();

module.exports = pool;