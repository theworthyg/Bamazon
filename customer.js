var mysql = require("mysql");
var inquirer = require("inquirer");

//  mysql connection
var connection = mysql.createConnection({
    host : "localhost",
    port: "3306",
    user: "root",
    password : "iamgroot",
    database : "bamazon_db"
});

connection.connect(function(err) {
    console.log("connected as id:" +connection.threadId);
})

connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log('response = ', res)
;	console.log("Item    Product \t\tDepartment \tPrice\t Stock");
	console.log("------------------------------------------------------------------");
	for (var i = 0; i < res.length; i++) {
		console.log(res[i].ItemID + " \t" + res[i].ProductName + "\t" + res[i].DepartmentName + "\t" + res[i].Price + " \t " + res[i].StockQuantity);
	}
	console.log("------------------------------------------------------------------");

	inquirer.prompt([{
		name: "product",
		type: "input",
		message: "What is the ID of the product that works best for you? [Changed your mind? Press Y]"
	},
	{
		name: "qty",
		type: "input",
		message: "You will claim your write-off later, what quantity did you have in mind?"

	}]).then(function (productObj) {
		if (productObj.product.toUpperCase() == "Y") {
			connection.end();
		} else {
			connection.query('SELECT * FROM products WHERE ?', { ItemID: productObj.product }, function (err, res) {
				if (err) throw err;
				// console.log(res)
				if (res[0].StockQuantity > productObj.qty) {

					var cost = res[0].Price * productObj.qty
					console.log("-----------------------------------");
					console.log("Order is validated! \nTotal cost is $" + cost.toFixed(2) + "\nThank you for ordering")

					var newQty = res[0].StockQuantity - productObj.qty

					connection.query("UPDATE products SET ? WHERE ?", [{
						StockQuantity: newQty
					},
					{
						ProductName: productObj.product
					}],

						function (err, res) {
						});
				}
				else {
					console.log("-----------------------------------");
					console.log("Sorry, we do not have enough in stock. \n Please retry your order. \nThank you!")
				}
			})
		}
	})
});
