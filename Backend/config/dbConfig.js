const mysql = require('mysql2');

const db = mysql.createPool(
    {
        database: process.env.database,
        password: process.env.password,
        user: process.env.user,
        host: process.env.host,
    }
);

async function query(sql , params){
    const [rows , fields ] = await db.execute(sql , params);
    return rows;
}

module.exports = db.promise();

