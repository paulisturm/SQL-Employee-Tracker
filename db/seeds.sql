INSERT INTO department (department_name)
VALUES ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 80000, 1),
        ("Engineer 1", 90000, 2),
        ("Manager", 70000, 3),
        ("Lawyer", 120000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Paul", "Sturm", 1, 1),
        ("Nathan", "Suhay", 2, 2),
        ("Nick", "Harrison", 3, 3),
        ("Dan", "Flashes", 4, 4);