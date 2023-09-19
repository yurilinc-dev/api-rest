import mysql from "mysql"

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '515400',
    database: 'bdcopa'
})

export default connection