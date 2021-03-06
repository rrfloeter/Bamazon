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

Manager();

function Manager() {
    inquirer.prompt([
        {
            type: "list",
            name: "manager",
            message: "Choose an Option",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add new Product", "Click to Exit"]
        }
    ]).then(function (answer) {
        switch (answer.manager) {
            case "View Products for Sale":
                Work();
                break;

            case "View Low Inventory":
                Low();
                break;

            case "Add to Inventory":
                Add();
                break;

            case "Add new Product":
                New();
                break;

            case "Click to Exit":
                console.log("You have exited the Manager app");
                connection.end();
                break;
        }
    });
}

function Work() {
    connection.connect(function (err) {
        connection.query("SELECT * FROM products", function (err, result, fields) {
            var columns = columnify(result);
            if (err) throw err;
            console.log(columns);
            connection.end();
        });
    });
}

function Low() {
    connection.connect(function (err) {
        connection.query("SELECT * FROM products", function (err, result, fields) {
            for (var i = 0; i < result.length; i++) {
                if (result[i].Quantity < 5) {
                    var columns = columnify(result[i]);
                    console.log(columns);
                }

            }
            connection.end();
        });
    });
}

function Add() {
    inquirer.prompt([
        {
            type: "list",
            name: "add",
            message: "Which Item would you like to increase inventory to",
            choices: ["AMZE", "JB", "EJ", "PS4", "LEDG", "MP", "KFT", "COLA", "SNK", "SWST"]
        },
        {
            type: "input",
            name: "total",
            message: "Enter Amount"
        }
    ]).then(function (answer) {
        var array = Object.keys(answer).map(i => answer[i]);
        var num = array.pop();
        var number = Number(num);
        connection.connect(function (err) {
            connection.query("SELECT * FROM products", function (err, result, fields) {
                var Array = Object.values(result);
                var string = array.shift();
                var quantity = Array.find(i => i.item_id === string);
                var indquant = Object.values(quantity);
                var final = indquant[5];
                var update = (number + final);
                console.log("You've update the total stock of item_id " + string + " by " + number + " making the total " + update + " units.");
                connection.query("UPDATE products SET ? WHERE ?",
                    [
                        {
                            Quantity: update
                        },
                        {
                            item_id: string
                        }
                    ]
                );
                connection.end();
            });
        });
    });
}

function New() {
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Enter an Item ID",
        },
        {
            type: "input",
            name: "product",
            message: "Enter the Product Name"
        },
        {
            type: "input",
            name: "department",
            message: "enter the department this product would fall under"
        },
        {
            type: "input",
            name: "price",
            message: "Enter the price of the product"
        },
        {
            type: "input",
            name: "quantity",
            message: "Enter the total Quantity of the product",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ]).then(function (answer) {
        connection.query(
            "INSERT INTO products SET ?",
            {
                item_id: answer.id,
                product_name: answer.product,
                department_name: answer.department,
                price: answer.price,
                Quantity: answer.quantity
            },
            function (err) {
                if (err) throw err;
                console.log("You've added a new item");
                connection.end();
            }
        );
    });
}