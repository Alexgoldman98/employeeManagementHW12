const connection = require('./connection');

class DB {
    constructor(connection){
        this.connection = connection;
    };
    //making function to find all employees
    viewAllEmployees(){
        return this.connection.query("SELECT employee.id, employee.first_name, employee.last_name")
    }
};

module.exports = new DB(connection)