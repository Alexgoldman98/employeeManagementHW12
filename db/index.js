const connection = require('./connection');
const prompt = require('prompt-sync')();
const inquirer = require('inquirer');


class DB {
    constructor(connection) {
        this.connection = connection;
    };
    //making function to find all employees
    //view departments, roles, employees,
    findAllEmployees() {
        let test = this.connection.query("SELECT * FROM employee;")
        return test;
    };

    findByDepartment() {
        return this.connection.query("SELECT department.id, department.name FROM department")
    };

    findRoles() {
        return this.connection.query("SELECT * FROM role")

    };


    // add employees, departments, roles
    async addEmpDB() {
        const values = await inquirer.prompt([
            {
                message: "Enter new employee first name",
                type: 'input',
                name: 'first_name'
            },
            {
                message: "Enter new employee last name",
                type: 'input',
                name: 'last_name'
            }, {
                message: "Enter new employee role id",
                type: 'input',
                name: 'role_id'
            }, {
                message: "Enter new employee manager_id",
                type: 'input',
                name: 'manager_id'
            }]);
        return this.connection.query(`INSERT INTO employee SET ?`, [values]);
    };


    async addDepartmentDB() {
        const values = await inquirer.prompt([
            {
                message: "Enter department name",
                type: 'input',
                name: 'name'
            }]);
        return this.connection.query(`INSERT INTO department SET ?`, [values]);

    };

    async addRolesDB(){
        const values = await inquirer.prompt([
            {
                message: "Enter new role title",
                type: 'input',
                name: 'title'
            },{
                message: "Enter new role salary",
                type: 'input',
                name: 'salary'
            },{
                message: "Enter new role department id",
                type: 'input',
                name: 'department_id'
            }]);
        return this.connection.query(`INSERT INTO role SET ?`, [values]);

    };

    //update employee roles
    async updateEmpDB() {
        const employees = await this.findAllEmployees();
        console.log(`\n `)
        console.table(employees)

        const role = await this.findRoles();
        console.log(`\n `)
        console.table(role)
        
        const values = await inquirer.prompt([
            {
                message: "Enter employee ID whose role you want to change",
                type: 'input',
                name: 'id'
            },
            {
                message: 'Enter new role ID of employee',
                type: 'input',
                name: 'role_id'
            }
        ]);
        return this.connection.query(`UPDATE employee SET role_id = ${values.role_id} WHERE id = ${values.id}`);
    };

   
};

module.exports = new DB(connection)