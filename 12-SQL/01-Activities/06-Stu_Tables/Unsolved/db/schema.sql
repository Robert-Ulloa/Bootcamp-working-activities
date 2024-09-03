DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
\c books_db;

-- Add biography table --
CREATE TABLE biographies (
    id INTEGER,
    name VARCHAR(100)
);

-- Verify the table creation
\dt
