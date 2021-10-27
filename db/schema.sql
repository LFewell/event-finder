-- Delete existing database
DROP DATABASE IF EXISTS events_db;
-- Create new database
CREATE DATABASE events_db;

-- Use newly created database
USE events_db;


-- -- Create Table 1 - Users
 CREATE TABLE users (
     id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    userID VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    userPassword VARCHAR(30) NOT NULL
    -- More should be coming soon
 );

-- -- Create Table 2 - Data
-- CREATE TABLE userData (
--     eventKey INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
--     eventID VARCHAR(30) NOT NULL,
--     eventName VARCHAR(30) NOT NULL,
--     -- geoLat NUMBER(30) NOT NULL,
--     -- geoLon NUMBER(30) NOT NULL,
--     -- eventDate DATE(30) NOT NULL,
--     -- eventDescription LONGTEXT NOT NULL
-- );
