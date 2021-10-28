-- Delete existing database
DROP DATABASE IF EXISTS events_db;
-- Create new database
CREATE DATABASE events_db;

-- Use newly created database
USE events_db;


-- Create Table 1 - Users
--  DROP TABLE IF EXISTS User;  -- Main database, shouldn't ever drop it
 CREATE TABLE User (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
 );

-- Create Table 2 - Events (Convert to Model)
 DROP TABLE IF EXISTS Events;
 CREATE TABLE Events (
     eventID VARCHAR(50) NOT NULL,
     eventName VARCHAR(255),
     geoLat FLOAT(255,15) NOT NULL,
     geoLon FLOAT(255,15) NOT NULL,
     eventDate VARCHAR(50) NOT NULL,
     eventDescription VARCHAR(255)
 ); 

 -- Create Table 3 - Temporary Data
 DROP TABLE IF EXISTS Temporary;
 CREATE TABLE Temporary (
    tempID INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    tempUsername VARCHAR(255) NOT NULL,
    tempEmail VARCHAR(255) NOT NULL,
    tempPassword VARCHAR(255) NOT NULL
 );
