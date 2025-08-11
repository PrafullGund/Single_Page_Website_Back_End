Create Database website;
use website;

create table course(
	id int auto_increment primary key,
    courseName VARCHAR (255) NOT NULL,
    description TEXT NOT NULL,
    courseDuration VARCHAR(50),
    fees DECIMAL(10,2),
    nextBatchStaringDate DATE,
    modeOfBatch TEXT,
    batchTime VARCHAR(20),
    imageUrl TEXT
);

CREATE TABLE registration (
    id INT AUTO_INCREMENT PRIMARY KEY,
    studentName VARCHAR(50) NOT NULL,
    emailId VARCHAR(50) NOT NULL,
    mobileNumber VARCHAR(15) NOT NULL,
    courseId INT, 
    FOREIGN KEY (courseId) REFERENCES course(id) ON DELETE CASCADE
);

CREATE TABLE team(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  qalification VARCHAR (50) NOT NULL,
  experience VARCHAR (20) NOT NULL,
  imageUrl VARCHAR(255) NOT NULL
);

CREATE TABLE testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  imageUrl VARCHAR(255) DEFAULT NULL
);


CREATE TABLE contactUs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR (50) NOT NULL,
  message VARCHAR(255) NOT NULL
);

