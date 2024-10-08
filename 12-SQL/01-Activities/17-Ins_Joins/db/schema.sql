DROP DATABASE IF EXISTS courses_db;
CREATE DATABASE courses_db;

\c courses_db;

CREATE TABLE departments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE course_names (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  department_id INTEGER,
  FOREIGN KEY (department)
  REFERENCES departments(id)
  ON DELETE SET NULL
);

\i seeds.sql;