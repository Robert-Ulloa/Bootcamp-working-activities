-- Write your Schema Here -- 


-- Drop the database if it exits
DROP DATABASE IF EXISTS customers_db;

-- Connect to the new databases
CREATE DATABASE customers_db;

-- Connect to the new database
\c customers_db;

-- Create the customers table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
);

-- Create the customer_orders table
CREATE TABLE customer_orders (
    id SERIAL PRIMARY KEY,
    customers_id INTEGER,
    order_details TEXT,
    FOREIGN KEY (customers_id)
    REFERENCES customers(id)
    ON DELETE CASCADE
);