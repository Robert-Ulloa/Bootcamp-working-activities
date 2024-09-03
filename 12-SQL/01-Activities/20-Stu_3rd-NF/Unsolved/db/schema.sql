-- Connect to the postgres database to ensure we can create a new database
\c postgres

-- Drop the existing company database if it exists
DROP DATABASE IF EXISTS company;

-- Create the company database
CREATE DATABASE company;

-- Connect to the newly created company database
\c company

-- Drop tables if they exist to avoid conflicts
DROP TABLE IF EXISTS businesses;
DROP TABLE IF EXISTS locations;

-- Create locations table
CREATE TABLE locations (
    location_id SERIAL PRIMARY KEY,
    location_name VARCHAR(255) NOT NULL,
    location_manager VARCHAR(255) NOT NULL
);

-- Create businesses table
CREATE TABLE businesses (
    business_id SERIAL PRIMARY KEY,
    business_name VARCHAR(255) NOT NULL,
    location_id INTEGER REFERENCES locations(location_id)
);
