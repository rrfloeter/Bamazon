var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "Pengu1n$$$",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    connection.query("SELECT * FROM products", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
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
                    console.log("Your Total is $" + total);
                    connection.query("UPDATE products SET ? WHERE ?",
                        [
                            {
                                Quantity: newQuant
                            },
                            {
                                id: 1
                            }
                        ]
                    );
                    connection.end();
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
                    console.log("Your Total is $" + total);
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
                    connection.end();
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
                    console.log("Your Total is $" + total);
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
                    connection.end();
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
                    console.log("Your Total is $" + total);
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
                    connection.end();
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
                    console.log("Your Total is $" + total);
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
                    connection.end();
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
                    console.log("Your Total is $" + total);
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
                    connection.end();
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
                    console.log("Your Total is $" + total);
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
                    connection.end();
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
                    console.log("Your Total is $" + total);
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
                    connection.end();
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
                    console.log("Your Total is $" + total);
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
                    connection.end();
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
                    console.log("Your Total is $" + total);
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
                    connection.end();
                }
                else {
                    console.log("Sorry we have insufficient Quantity.");
                    connection.end();
                }
            });
        });
    });
}