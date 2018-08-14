### Schema

CREATE DATABASE burguer_db;
USE burguer_db;

CREATE TABLE burguer
(
	id int NOT NULL AUTO_INCREMENT,
	burguer_type varchar(255) NOT NULL,
	isEaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);