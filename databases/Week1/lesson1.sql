select * from user;
​
SELECT * FROM `status`;
​
SELECT * FROM `task`;
​
SELECT `name`, `phone`, `email` FROM `user`;
​
SELECT * FROM `user` ORDER BY `name` DESC;
​
SELECT * FROM `user` WHERE `id` = 1;
​
SELECT * FROM `user` WHERE `name`='Aarika Ellingworth';
​
SELECT * FROM `user` WHERE `name` LIKE 'A%';
​
SELECT * FROM `user` WHERE `name` LIKE '%A%';
​
SELECT * FROM `user` WHERE `name` LIKE '%Z%';
​
SELECT * FROM `user` WHERE `name` LIKE 'A%' ORDER BY `name` DESC;
​
SELECT * FROM `user` WHERE `name` LIKE '%A%' ORDER BY `name` ASC;
​
SELECT * FROM `user` WHERE (`name` LIKE '%A%' AND `phone` LIKE '%5%');
​
SELECT * FROM `user` WHERE ( `name` LIKE '%B%' AND `phone` LIKE '%1');
​
SELECT * FROM `user` WHERE (`name` LIKE '%A%' AND `phone` LIKE '%5%') OR ( `name` LIKE '%B%' AND `phone` LIKE '%1' ) ;
​
SELECT * FROM `user` ORDER BY `name` DESC LIMIT 2;
​
SELECT SUM(status_id) FROM `task` GROUP BY status_id;
​
SELECT MAX(due_date) FROM `task`;
​
SELECT MIN(due_date) FROM `task`;
​
SHOW CREATE TABLE `user`;
​
DESC table `user`;
​
SELECT * FROM `task` AS tk
INNER JOIN `user` AS usr ON tk.user_id =  usr.id
INNER JOIN `status` as st ON st.id = tk.status_id;
​
SELECT usr.name, tk.title, tk.description , st.name FROM `task` AS tk
INNER JOIN `user` AS usr ON tk.user_id =  usr.id
INNER JOIN `status` as st ON st.id = tk.status_id;
​
SELECT COUNT(usr.name), usr.name, st.name FROM `task` AS tk
INNER JOIN `user` AS usr ON tk.user_id =  usr.id
INNER JOIN `status` as st ON st.id = tk.status_id
GROUP BY usr.name, st.name;