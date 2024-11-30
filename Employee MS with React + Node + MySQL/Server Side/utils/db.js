import mysql from 'mysql2'
import dotenv from 'dotenv';
dotenv.config();

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:process.env.PASSWORD,
    database: "employeems"
})

con.connect(function(err) {
    if(err) {
        console.log("connection error")
    } else {
        console.log("Connected")
    }
})

export default con;

