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
            done();
            
    });
    }
    if (search === 'view all roles'){
        db.query('SELECT * FROM role', (err, result) => {if (err) throw err;
            console.table(result);
            done();
    });
    }
    if (search === 'view all employees'){
        db.query('SELECT * FROM employee', (err, result) => {if (err) throw err;
            console.table(result);
            done();
    });
    }
    if (search === 'add a role'){
        inquirer
        .prompt([{
            name: 'title',
            type: 'input',
            message: 'Enter name of new role'
        },{
            name: 'salary',
            type: 'input',
            message: 'Enter salary'
        },{
            name: 'department_id',
            type: 'input',
            message: 'Enter department id'
        }])
        .then((result) => {
            db.promise().query('INSERT INTO role SET ?',result)
            .then(result => {
                // console.log(result);
                //displayRoles();
                done();
            })
            console.log(`${result.title} has been succesfully added to the database`)
})
         
    }
    if (search === 'add an employee'){
        inquirer
        .prompt([{
            name: 'first_name',
            type: 'input',
            message: 'Enter first name of new employee'
        },{
            name: 'last_name',
            type: 'input',
            message: 'Enter last name of new employee'
        },{
            name: 'role_id',
            type: 'input',
            message: 'Enter employee role id'
        },{
            name: 'manager_id',
            type: 'input',
            message: 'Enter employee manager id'
        }])
        .then((result) => {
            db.promise().query('INSERT INTO employee SET ?',result)
            .then(result => {
                // console.log(result);
                //displayRoles();
                done();
            })
            console.log(`${result.first_name} has been succesfully added to the database`)
})
         
    }
    // if (search === 'update an employee role'){
    //     db.query('SELECT * FROM department', (err, result) => {if (err) throw err;
    //         console.table(result);
    //     employeePrompt();
    // });
    // }
    if (search === 'add a department'){
        inquirer
        .prompt([{
            name: 'department_name',
            type: 'input',
            message: 'Enter name of department'
        }
    ])
        .then((result) => {
            db.promise().query('INSERT INTO department SET ?',result)
            .then(result => {
                // console.log(result);
                //displayRoles();
                done();
            })
            console.log(`Department has been succesfully added to the database`)
})
         
    }
});


// function displayRoles() {
//     db.query('SELECT * FROM role', (err, result) => {
//         if (err) throw err;
//     console.table(result);
//     })
// }

function done() {
    return process.exit();
}


// app.listen(port, () =>
//   console.log(`App listening at http://localhost:${port} 🚀`)
// );