import mysql from 'MariaDB';
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'DB_vendas'
});