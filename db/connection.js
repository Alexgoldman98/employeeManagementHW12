const mysql = require('mysql');
const util = require('util')

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port, if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'Password!Haha',
    database: 'employee_db',
  });
  connection.connect();
  //this allows the use of the async await syntax
  connection.query = util.promisify(connection.query);

module.exports=connection;
  