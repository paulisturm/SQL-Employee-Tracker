const express = require('express');
const mysql = require('mysql2');
const port = process.env.PORT || 3001;
const inquirer = require('inquirer');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    }).then((answers) => {
    const {search} = answers;

    if (search === 'view all departments'){
        db.query('SELECT * FROM department', (err, result) => {if (err) throw err;
            console.table(result);
    });
    }
    if (search === 'view all roles'){
        db.query('SELECT * FROM roles', (err, result) => {if (err) throw err;
            console.table(result);
    });
    }
    if (search === 'view all employees'){
        db.query('SELECT * FROM employees', (err, result) => {if (err) throw err;
            console.table(result);
    });
    }
    if (search === 'add a role'){
        inquirer
        .prompt([{
            name: 'role',
            type: 'input',
            message: 'Enter name of new role'
        },{
            name: 'salary',
            type: 'input',
            message: 'Enter salary'
        },{
            name: 'department',
            type: 'input',
            message: 'Enter department id'
        }])
        .then(({role,salary,department}) => {
            db.query('INSERT INTO Role (title, salary, department_id)'), (err, result) => {if (err) throw err;
                console.table(result);
    }})
         
    }
    if (search === 'add an employee'){
        inquirer
        .prompt({
            name: 'employee',
            type: 'input',
            message: 'Enter name of new employee'
        })
        .then()
    }
    // if (search === 'update an employee role'){
    //     db.query('SELECT * FROM department', (err, result) => {if (err) throw err;
    //         console.table(result);
    //     employeePrompt();
    // });
    // }
});


// app.listen(port, () =>
//   console.log(`App listening at http://localhost:${port} 🚀`)
// );