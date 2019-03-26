CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	-- Columns
	ItemID INT NOT NULL AUTO_INCREMENT,
	ProductName VARCHAR(200) NULL,
	DepartmentName VARCHAR(200) NULL,
	Price INT(6) DEFAULT 0,
	StockQuantity INT (6) NOT NULL,
  
PRIMARY KEY (ItemID)
);

