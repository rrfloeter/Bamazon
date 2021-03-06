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

connection.connect(function (err) {
    if (err) throw err;
    connection.query("SELECT * FROM products", function (err, result, fields) {
        var columns = columnify(result);
        if (err) throw err;
        console.log(columns);
        ID();
    });
});

function ID() {
    inquirer.prompt([
        {
            type: "list",
            name: "ID",
            message: "What is the ID of the product you'd like to buy?",
            choices: ["AMZE", "JB", "EJ", "PS4", "LEDG", "MP", "KFT", "COLA", "SNK", "SWST", "Click to Exit"]
        }
    ]).then(function (answers) {
        switch (answers.ID) {
            case "AMZE":
                console.log("You chose Amazon Echo");
                AMZE();
                break;

            case "JB":
                console.log("You chose Jelly Beans");
                JB();
                break;

            case "EJ":
                console.log("You chose Eloquent JavaScript");
                EJ();
                break;

            case "PS4":
                console.log("You chose a Playstation 4");
                PS4();
                break;

            case "LEDG":
                console.log("You chose a Ledger Nano S Crypto Wallet");
                LEDG();
                break;

            case "MP":
                console.log("You Picked Mashed Potatoes");
                MP();
                break;

            case "KFT":
                console.log("You chose Kraft Macaroni & Cheese");
                KFT();
                break;

            case "COLA":
                console.log("You chose Coca-Cola Soda");
                COLA();
                break;

            case "SNK":
                console.log("You chose New Balance Sneakers");
                SNK();
                break;

            case "SWST":
                console.log("You chose a sweatshirt");
                SWST();
                break;

            case "Click to Exit":
                connection.end();
                break;
        }
    });
}

function AMZE() {
    inquirer.prompt([
        {
            type: "input",
            name: "units",
            message: "How many Units would you like to purchase?",
        }
    ]).then(function (answer) {
        var array = Object.keys(answer).map(i => answer[i]);
        var string = array.toString();
        var num = Number(string);
        connection.connect(function (err) {
            connection.query("SELECT * FROM products", function (err, result, fields) {
                var Quant = result[0].Quantity;
                var newQuant = (Quant - num);
                if (num < Quant) {
                    console.log("Great News! We have enough for you to purchase!");
                    var Price = result[0].price;
                    var total = (num * Price);
                    var dept = result[0].department_name;
                    console.log("Your Total is $" + total);

                    connection.query("SELECT * FROM departments", function (err, result, fields) {
                        var total1 = result[0].product_sales;
                        console.log(total1);
                        var final = total1 + total;
                        console.log(final);

                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    Quantity: newQuant
                                },
                                {
                                    id: 1
                                }
                            ]);
                        connection.query("UPDATE departments SET ? WHERE ?",
                            [
                                {
                                    product_sales: final
                                },
                                {
                                    department_name: dept
                                }
                            ]);
                        connection.end();
                    });
                }
                else {
                    console.log("Sorry we have insufficient Quantity.");
                    connection.end();
                }
            });
        });
    });
}

function JB() {
    inquirer.prompt([
        {
            type: "input",
            name: "units",
            message: "How many Units would you like to purchase?",
        }
    ]).then(function (answer) {
        var array = Object.keys(answer).map(i => answer[i]);
        var string = array.toString();
        var num = Number(string);
        connection.connect(function (err) {
            connection.query("SELECT * FROM products", function (err, result, fields) {
                var Quant = result[1].Quantity;
                var newQuant = (Quant - num);
                if (num < Quant) {
                    console.log("Great News! We have enough for you to purchase!");
                    var Price = result[1].price;
                    var total = (num * Price);
                    var dept = result[1].department_name;
                    console.log("Your Total is $" + total);

                    connection.query("SELECT * FROM departments", function (err, result, fields) {
                        var total1 = result[1].product_sales;
                        var final = total1 + total;

                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    Quantity: newQuant
                                },
                                {
                                    id: 2
                                }
                            ]
                        );
                        connection.query("UPDATE departments SET ? WHERE ?",
                            [
                                {
                                    product_sales: final
                                },
                                {
                                    department_name: dept
                                }
                            ]);
                        connection.end();
                    });
                }
                else {
                    console.log("Sorry we have insufficient Quantity.");
                    connection.end();
                }
            });
        });
    });
}

function EJ() {
    inquirer.prompt([
        {
            type: "input",
            name: "units",
            message: "How many Units would you like to purchase?",
        }
    ]).then(function (answer) {
        var array = Object.keys(answer).map(i => answer[i]);
        var string = array.toString();
        var num = Number(string);
        connection.connect(function (err) {
            connection.query("SELECT * FROM products", function (err, result, fields) {
                var Quant = result[2].Quantity;
                var newQuant = (Quant - num);
                if (num < Quant) {
                    console.log("Great News! We have enough for you to purchase!");
                    var Price = result[2].price;
                    var total = (num * Price);
                    var dept = result[2].department_name;
                    console.log("Your Total is $" + total);

                    connection.query("SELECT * FROM departments", function (err, result, fields) {
                        var total1 = result[2].product_sales;
                        var final = total1 + total;

                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    Quantity: newQuant
                                },
                                {
                                    id: 3
                                }
                            ]
                        );
                        connection.query("UPDATE departments SET ? WHERE ?",
                            [
                                {
                                    product_sales: final
                                },
                                {
                                    department_name: dept
                                }
                            ]);
                        connection.end();
                    });
                }
                else {
                    console.log("Sorry we have insufficient Quantity.");
                    connection.end();
                }
            });
        });
    });
}

function PS4() {
    inquirer.prompt([
        {
            type: "input",
            name: "units",
            message: "How many Units would you like to purchase?",
        }
    ]).then(function (answer) {
        var array = Object.keys(answer).map(i => answer[i]);
        var string = array.toString();
        var num = Number(string);
        connection.connect(function (err) {
            connection.query("SELECT * FROM products", function (err, result, fields) {
                var Quant = result[3].Quantity;
                var newQuant = (Quant - num);
                if (num < Quant) {
                    console.log("Great News! We have enough for you to purchase!");
                    var Price = result[3].price;
                    var total = (num * Price);
                    var dept = result[3].department_name;
                    console.log(dept);
                    console.log("Your Total is $" + total);

                    connection.query("SELECT * FROM departments", function (err, result, fields) {
                        var total1 = result[0].product_sales;
                        var final = total1 + total;

                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    Quantity: newQuant
                                },
                                {
                                    id: 4
                                }
                            ]
                        );
                        connection.query("UPDATE departments SET ? WHERE ?",
                            [
                                {
                                    product_sales: final
                                },
                                {
                                    department_name: dept
                                }
                            ]);
                        connection.end()

                    });
                }

                else {
                    console.log("Sorry we have insufficient Quantity.");
                    connection.end();
                }
            });
        });
    });
}

function LEDG() {
    inquirer.prompt([
        {
            type: "input",
            name: "units",
            message: "How many Units would you like to purchase?",
        }
    ]).then(function (answer) {
        var array = Object.keys(answer).map(i => answer[i]);
        var string = array.toString();
        var num = Number(string);
        connection.connect(function (err) {
            connection.query("SELECT * FROM products", function (err, result, fields) {
                var Quant = result[4].Quantity;
                var newQuant = (Quant - num);
                if (num < Quant) {
                    console.log("Great News! We have enough for you to purchase!");
                    var Price = result[4].price;
                    var total = (num * Price);
                    var dept = result[4].department_name;
                    console.log("Your Total is $" + total);

                    connection.query("SELECT * FROM departments", function (err, result, fields) {
                        var total1 = result[0].product_sales;
                        console.log(total1);
                        var final = total1 + total;
                        console.log(final);

                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    Quantity: newQuant
                                },
                                {
                                    id: 5
                                }
                            ]
                        );
                        connection.query("UPDATE departments SET ? WHERE ?",
                            [
                                {
                                    product_sales: final
                                },
                                {
                                    department_name: dept
                                }
                            ]);
                        connection.end();

                    });
                }
                else {
                    console.log("Sorry we have insufficient Quantity.");
                    connection.end();
                }
            });
        });
    });
}

function MP() {
    inquirer.prompt([
        {
            type: "input",
            name: "units",
            message: "How many Units would you like to purchase?",
        }
    ]).then(function (answer) {
        var array = Object.keys(answer).map(i => answer[i]);
        var string = array.toString();
        var num = Number(string);
        connection.connect(function (err) {
            connection.query("SELECT * FROM products", function (err, result, fields) {
                var Quant = result[5].Quantity;
                var newQuant = (Quant - num);
                if (num < Quant) {
                    console.log("Great News! We have enough for you to purchase!");
                    var Price = result[5].price;
                    var total = (num * Price);
                    var dept = result[5].department_name;
                    console.log(dept);
                    console.log("Your Total is $" + total);

                    connection.query("SELECT * FROM departments", function (err, result, fields) {
                        var total1 = result[3].product_sales;
                        console.log(total1);
                        var final = total1 + total;
                        console.log(final);

                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    Quantity: newQuant
                                },
                                {
                                    id: 6
                                }
                            ]
                        );
                        connection.query("UPDATE departments SET ? WHERE ?",
                            [
                                {
                                    product_sales: final
                                },
                                {
                                    department_name: dept
                                }
                            ]);
                        connection.end();
                    });
                }
                else {
                    console.log("Sorry we have insufficient Quantity.");
                    connection.end();
                }
            });
        });
    });

}

function KFT() {
    inquirer.prompt([
        {
            type: "input",
            name: "units",
            message: "How many Units would you like to purchase?",
        }
    ]).then(function (answer) {
        var array = Object.keys(answer).map(i => answer[i]);
        var string = array.toString();
        var num = Number(string);
        connection.connect(function (err) {
            connection.query("SELECT * FROM products", function (err, result, fields) {
                var Quant = result[6].Quantity;
                var newQuant = (Quant - num);
                if (num < Quant) {
                    console.log("Great News! We have enough for you to purchase!");
                    var Price = result[6].price;
                    var total = (num * Price);
                    var dept = result[6].department_name;
                    console.log(dept);
                    console.log("Your Total is $" + total);

                    connection.query("SELECT * FROM departments", function (err, result, fields) {
                        var total1 = result[3].product_sales;
                        console.log(total1);
                        var final = total1 + total;
                        console.log(final);

                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    Quantity: newQuant
                                },
                                {
                                    id: 7
                                }
                            ]
                        );
                        connection.query("UPDATE departments SET ? WHERE ?",
                            [
                                {
                                    product_sales: final
                                },
                                {
                                    department_name: dept
                                }
                            ]);
                        connection.end();
                    });
                }
                else {
                    console.log("Sorry we have insufficient Quantity.");
                    connection.end();
                }
            });
        });
    });
}

function COLA() {
    inquirer.prompt([
        {
            type: "input",
            name: "units",
            message: "How many Units would you like to purchase?",
        }
    ]).then(function (answer) {
        var array = Object.keys(answer).map(i => answer[i]);
        var string = array.toString();
        var num = Number(string);
        connection.connect(function (err) {
            connection.query("SELECT * FROM products", function (err, result, fields) {
                var Quant = result[7].Quantity;
                var newQuant = (Quant - num);
                if (num < Quant) {
                    console.log("Great News! We have enough for you to purchase!");
                    var Price = result[7].price;
                    var total = (num * Price);
                    var dept = result[7].department_name;
                    console.log(dept);
                    console.log("Your Total is $" + total);

                    connection.query("SELECT * FROM departments", function (err, result, fields) {
                        var total1 = result[3].product_sales;
                        console.log(total1);
                        var final = total1 + total;
                        console.log(final);

                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    Quantity: newQuant
                                },
                                {
                                    id: 8
                                }
                            ]
                        );
                        connection.query("UPDATE departments SET ? WHERE ?", [
                            {
                                product_sales: final
                            },
                            {
                                department_name: dept
                            }
                        ]);
                        connection.end();
                    });
                }
                else {
                    console.log("Sorry we have insufficient Quantity.");
                    connection.end();
                }
            });
        });
    });
}

function SNK() {
    inquirer.prompt([
        {
            type: "input",
            name: "units",
            message: "How many Units would you like to purchase?",
        }
    ]).then(function (answer) {
        var array = Object.keys(answer).map(i => answer[i]);
        var string = array.toString();
        var num = Number(string);
        connection.connect(function (err) {
            connection.query("SELECT * FROM products", function (err, result, fields) {
                var Quant = result[8].Quantity;
                var newQuant = (Quant - num);
                if (num < Quant) {
                    console.log("Great News! We have enough for you to purchase!");
                    var Price = result[8].price;
                    var total = (num * Price);
                    var dept = result[8].department_name;
                    console.log(dept);
                    console.log("Your Total is $" + total);

                    connection.query("SELECT * FROM departments", function (err, result, fields) {
                        var total1 = result[4].product_sales;
                        console.log(total1);
                        var final = total1 + total;
                        console.log(final);

                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    Quantity: newQuant
                                },
                                {
                                    id: 9
                                }
                            ]
                        );
                        connection.query("UPDATE departments SET ? WHERE ?",
                            [
                                {
                                    product_sales: final
                                },
                                {
                                    department_name: dept
                                }
                            ]);
                        connection.end();
                    });
                }
                else {
                    console.log("Sorry we have insufficient Quantity.");
                    connection.end();
                }
            });
        });
    });
}

function SWST() {
    inquirer.prompt([
        {
            type: "input",
            name: "units",
            message: "How many Units would you like to purchase?",
        }
    ]).then(function (answer) {
        var array = Object.keys(answer).map(i => answer[i]);
        var string = array.toString();
        var num = Number(string);
        connection.connect(function (err) {
            connection.query("SELECT * FROM products", function (err, result, fields) {
                var Quant = result[9].Quantity;
                var newQuant = (Quant - num);
                if (num < Quant) {
                    console.log("Great News! We have enough for you to purchase!");
                    var Price = result[9].price;
                    var total = (num * Price);
                    var dept = result[9].department_name;
                    console.log(dept);
                    console.log("Your Total is $" + total);

                    connection.query("SELECT * FROM departments", function (err, result, fields) {
                        var total1 = result[4].product_sales;
                        console.log(total1);
                        var final = total1 + total;
                        console.log(final);

                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    Quantity: newQuant
                                },
                                {
                                    id: 10
                                }
                            ]
                        );
                        connection.query("UPDATE departments SET ? WHERE ?",
                            [
                                {
                                    product_sales: final
                                },
                                {
                                    department_name: dept
                                }
                            ]);
                        connection.end();
                    });
                }
                else {
                    console.log("Sorry we have insufficient Quantity.");
                    connection.end();
                }
            });
        });
    });
}