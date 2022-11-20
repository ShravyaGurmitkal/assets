--Select the names and phones of all users;
SELECT `name`, `phone`, `email` FROM `user`;

--Select the name of the user with id=10;
SELECT `name` FROM `user` WHERE id = 10;

--Find how many users exist in the database;
SELECT COUNT(`id`) AS `Users` FROM `user`;

--Select the names of the first 5 users in the database;
SELECT `name` FROM `user` LIMIT 5;

--Select the names of the last 3 users in the database;
SELECT `name` FROM `user` ORDER BY `id` DESC LIMIT 3;

--Sum all the ids in the user table;
SELECT SUM(`id`) as `sum_of_ids` FROM `user`;

--Select all users and order them alphabetically by name;
SELECT * from `user` ORDER BY `name`;

--Find all tasks that include SQL either on the title or on the description;
SELECT * FROM `task` WHERE `title` LIKE '%SQL%' OR `description` LIKE '%SQL%';

--Find the title of all tasks that the user Maryrose is responsible for;
SELECT `title` FROM `task` WHERE `user_id` = (SELECT `id` from `user` where `name` = 'Maryrose Meadows');

--Find how many tasks each user is responsible for;
SELECT `user_id`, COUNT(`id`) AS `task_Count` FROM `task` GROUP BY `user_id`;

--Find how many tasks with a status=Done each user is responsible for;
SELECT `user_id`, COUNT(`id`) AS `task_Count` from `task` WHERE `status_id` IN (SELECT `id` FROM `status` WHERE `name` = 'Done') GROUP BY `user_id`;
