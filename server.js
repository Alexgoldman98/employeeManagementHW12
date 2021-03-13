const mysql = require('mysql');
const inquirer = require('inquirer');
const { listenerCount } = require('events');
const db = require('./db');
const connection = require('./db/connection');

//ask questions

async function askQuestions() {
  const answers = await inquirer.prompt([
    {
      name: 'firstQ',
      type: 'list',
      message: 'What would you like to do?',
      choices: [{
        name: 'View All Employees', 
        value: 'VIEW_EMPLOYEES'},
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
  
  if (answers.firstQ === 'VIEW_EMPLOYEES'){
    return viewAllEmployees()
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
//  const employees = await db.findAllEmployees();
//  console.log(`\n `)
//  console.table(employees)
connection.query("SELECT * FROM employee",
function(err,res){
  if (err) throw err
  console.table(res)
  askQuestions()
});
};

async function byDepartment(){
  const department = await db.byDepartment();
  console.log(`\n `)
  console.table(department)
  askQuestions()

};

async function byManager(){
  const manager = await db.byManager();
  console.log(`\n `)
  console.table(manager)
  askQuestions()
};

async function addEmployee(){
  const employees = await db.viewAllEmployees();
  console.log(`\n `)
  console.table(employees)
  askQuestions()
};

async function removeEmployee(){

};

async function updateEmployee(){

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