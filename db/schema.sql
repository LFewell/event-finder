-- Delete existing database
DROP DATABASE IF EXISTS events_db;
-- Create new database
CREATE DATABASE events_db;

-- Use newly created database
USE events_db;


-- Create Table 1 - Users
 DROP TABLE IF EXISTS User;
 CREATE TABLE User (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
 );

-- Create Table 2 - Events
 DROP TABLE IF EXISTS Events;
 CREATE TABLE Events (
     eventID VARCHAR(50) NOT NULL,
     eventName VARCHAR(255),
     geoLat INT(50) NOT NULL,
     geoLon INT(50) NOT NULL,
     eventDate VARCHAR(50) NOT NULL,
     eventDescription VARCHAR(255)
 ); 