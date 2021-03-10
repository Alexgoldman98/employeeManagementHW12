const mysql = require('mysql');
const inquirer = require('inquirer');
const { listenerCount } = require('events');
const db = require( 'connection.js' )('employee_db','localhost')

//ask questions

async function askQuestions() {
  const answers = await inquirer.prompt([
    {
      name: 'firstQ',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View All Employees',
        'View All Employees By Department',
        'View All Employees By Manager',
        'Add Employee',
        'Remove Employee',
        'Update Employee Role',
        'Update Employee Manager',
        'Remove Manager',
        'View all Roles',
      ]
    }
  ])
  
  if (answers.firstQ === 'View All Employees'){
    viewAllEmployees()
  } else if(answers.firstQ === 'View All Employees By Department'){
    byDepartment()
  } else if(answers.firstQ === 'View All Employees By Manager'){
    byManager()
  } else if(answers.firstQ === 'Add Employee'){
    addEmployee()
  } else if (answers.firstQ === 'Remove Employee'){
    removeEmployee()
  } else if (answers.firstQ === 'Update Employee Role'){
    updateEmployee()
  } else if(answers.firstQ === 'Update Employee Manager'){
    updateManager()
  } else if(answers.firstQ === 'Remove Manager'){
    removeManager()
  } else if(answers.firstQ === 'View all Roles'){
    viewRoles()
  } else{
    console.log('Failed')
  }
};

function viewAllEmployees(){
  const allEmp = await db.query('SELECT')
};

function byDepartment(){

};

function byManager(){

};

function addEmployee(){

};

function removeEmployee(){

};

function updateEmployee(){

};

function updateManager(){

};

function removeManager(){

};

function viewRoles(){

};

askQuestions()

//add departments, roles, employees,

//view departments, roles, employees,

//update employee roles