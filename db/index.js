const connection = require('./connection');

class DB {
    constructor(connection){
        this.connection = connection;
    };
    //making function to find all employees
    findAllEmployees(){
        return this.connection.query("SELECT * FROM employee")
    };

    byDepartment(){
        return this.connection.query("SELECT department.id, department.name")
    };

    byManager(){
        return this.connection.query("SELECT * FROM department")
    };

    addEmployee(){
        return this.connection.query("SELECT * FROM department")
    };

    removeEmployee(){
        return this.connection.query("SELECT * FROM department")

    };

    updateEmployee(){
        return this.connection.query("SELECT * FROM department")

    };

    updateManager(){
        return this.connection.query("SELECT * FROM department")

    };

    removeManager(){
        return this.connection.query("SELECT * FROM department")

    };

    viewRoles(){
        return this.connection.query("SELECT * FROM department")

    };
};

module.exports = new DB(connection)