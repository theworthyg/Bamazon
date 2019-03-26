select * from products;

USE bamazon_db;

-- 10 sample products
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Xbox one", "Electronics", 299, 5);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("PS4 Pro", "Electronics", 399, 5);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Xbox Elite Controller", "Electronics", 59, 5);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Oakley Sunglasses", "Clothes", 199, 5);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Gucci shirt ", "Clothes", 300, 5);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Vans Shoes", "Clothes", 59, 5);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Bud Light 30pk", "Food", 19, 5);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Paintball gun", "H1obby", 400, 5);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Dirtbike", "Vehicles", 3000, 5);
INSERT INTO products (ProductName, departmentName, price, stockQuantity) values ("Flamethrower", "Tools", 5, 5);

select * from products;