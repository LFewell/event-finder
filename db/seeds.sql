-- Select database just in case 
USE events_db;

INSERT INTO User (username,email,password)
VALUES ("FuriousAngle","ericrion@yourmom.com","password1234");

INSERT INTO Events (eventID,eventName,geoLat,geoLon,eventDate,eventDescription)
VALUES ("Z7r9jZ1AdFUqk","Brooklyn Nets vs. Phoenix Suns",40.682499,-73.979401,"1900-01-01T06:00:00Z","Sports - Basketball");