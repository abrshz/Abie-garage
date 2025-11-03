const mysql = require('mysql2');

const db = mysql.createPool(
    {
        database: 'abiegarage',
        password: 'abiegarage2025',
        user: 'userAbiegarage',
        host: 'localhost'
    }
);

module.exports = db.promise();

