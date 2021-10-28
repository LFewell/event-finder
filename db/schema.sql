-- Delete existing database
DROP DATABASE IF EXISTS events_db;
-- Create new database
CREATE DATABASE events_db;

-- Use newly created database
USE events_db;


-- -- Create Table 1 - Users
 CREATE TABLE User (
     id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    userID VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    userPassword VARCHAR(50) NOT NULL
 );

CREATE TABLE Attraction (
    eventID VARCHAR(50) NOT NULL,
);
