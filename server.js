const express = require(express);
const mysql = require('mysql2');
const port = process.env.PORT || 3001;
const app = require(express);

const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the employee database.`)
  );

const employeePrompt = () => {
    inquirer
    .prompt ({
       name: 'search',
       type: 'list',
       message: 'Select From Menu',
       choices: [
            'view all departments',
            'view all roles',
            'view all employees',
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role'
       ]
    .then((answers) => 
    const choices = answers;

    if (choices === 'view all departments'){
        viewAllDepartments();
    }
    if (choices === 'view all roles'){
        viewAllRoles();
    }
    if (choices === 'view all employees'){
        viewAllEmployees();
    }
    if (choices === 'add a role'){
        addARole();
    }
    if (choices === 'add an employee'){
        addAnEmployee();
    }
    if (choices === 'update an employee role'){
        updateRole();
    }
    )
    })
};