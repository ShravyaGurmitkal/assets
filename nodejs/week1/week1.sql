USE `hyf_node-week1`;

CREATE TABLE users(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    created_at DATE NOT NULL COMMENT 'Create Time',
    confirmed_at DATE COMMENT 'Update Time',
    first_name VARCHAR(255) NOT NULL COMMENT 'first name',
    last_name VARCHAR(255) NOT NULL COMMENT 'last name',
    email VARCHAR(255) UNIQUE
) DEFAULT CHARSET UTF8 COMMENT 'userstable';

INSERT INTO users (id,created_at,confirmed_at,first_name,last_name,email) VALUES (1, '2022-09-01','2022-09-04','Shravya','Gurmitkal','ahr@gmail.com');
INSERT INTO users (id,created_at,confirmed_at,first_name,last_name,email) VALUES (2, '2022-09-02','2022-09-04','vinod','Aguri','vin@gmail.com');
INSERT INTO users (id,created_at,first_name,last_name,email) VALUES (3, '2022-08-02','vi','Ag','vin@yahoo.com');
INSERT INTO users (id,created_at,first_name,last_name,email) VALUES (4, '2022-08-05','shi','chow','shin@yahoo.com');
INSERT INTO users (id,created_at,confirmed_at,first_name,last_name,email) VALUES (5, '2021-09-02','2021-09-04','abr','syv','arn@gmail.com');

SELECT * FROM users ORDER BY id DESC;

SELECT * FROM users WHERE confirmed_at IS NULL;

SELECT * FROM users WHERE email LIKE '%@gmail.com';

SELECT * FROM users WHERE year(created_at) = '2022';