require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");
var columnify = require('columnify');


var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    port: process.env.port,
    password: process.env.password,
    database: process.env.database
});

Supervisor();

function Supervisor() {
    inquirer.prompt([
        {
            type: "list",
            name: "supervisor",
            message: "Choose an Option",
            choices: ["View Product Sales by Department", "Create New Department"]
        }
    ]).then(function (answer) {
        switch (answer.supervisor) {
            case "View Product Sales by Department":
                view();
                break;

            case "Create New Department":
                New();
                break;
        }
    });
}

function view() {
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("SELECT * FROM departments", function (err, result, fields) {
            for (var i = 0; i < result.length; i++) {
                var oh = result[i].over_head_costs;
                var sale = result[i].product_sales;
                var total = sale - oh;
                var dept = result[i].department_name;

                connection.query("UPDATE departments SET ? WHERE ?",
                    [
                        {
                            total_profit: total
                        },
                        {
                            department_name: dept
                        }
                    ]);
            }
        });
        connection.query("SELECT * FROM departments", function (err, result, fields) {
            var columns = columnify(result);
            console.log(columns);
            connection.end();
        });
    });
}

function New() {
    inquirer.prompt([
        {
            type: "input",
            name: "deptn",
            message: "Enter the department name"
        },
        {
            type: "input",
            name: "OHcosts",
            message: "Enter the Overhead Costs"
        },
        {
            type: "input",
            name: "PS",
            message: "Enter the Product Sales"
        }
    ]).then(function (answer) {
        var OH = answer.OHcosts;
        var sale = answer.PS;
        var diff = sale - OH;

        connection.query(
            "INSERT INTO departments SET ?",
            {
                department_name: answer.deptn,
                over_head_costs: answer.OHcosts,
                product_sales: answer.PS,
                total_profit: diff
            },
            function (err) {
                if (err) throw err;
                console.log("You've logged a new item");
                connection.end();
            }
        )
    })
}
