const express = require('express');
const app = express();
const port = 3000;
const knex = require('knex') ({
    client: 'mysql2',
    connection : {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '123456',
        database: 'hyf_node-week1'
    }

})

app.get('/', (req, res) => {
    res.send('Hello class!');
});

app.get('/info', async(req, res) => {
    const dbResult = await knex.raw('SELECT VERSION()');
    console.log(dbResult);
    const row = dbResult[0][0];
    res.json({
        "nodeVersion" : process.version,
        "mysqlVersion" : row['VERSION()']
        });
});

app.get('/all-users', async(req, res) => {
    const dbResult = await knex.raw('SELECT * FROM users ORDER BY id DESC');
    //console.log(dbResult);
    const usersRow = dbResult[0];
    console.log(usersRow);
    res.send(usersRow);
});

app.get('/unconfirmed-users', async(req, res) => {
    const dbResult = await knex.raw('SELECT * FROM users WHERE confirmed_at IS NULL');
    //console.log(dbResult);
    const unconfirmedUsersRow = dbResult[0];
    console.log(unconfirmedUsersRow);
    res.send(unconfirmedUsersRow);
});

app.get('/gmail-users', async(req, res) => {
    const dbResult = await knex.raw(`SELECT * FROM users WHERE email LIKE '%@gmail.com'`);
    //console.log(dbResult);
    const gmailUsersRow = dbResult[0];
    console.log(gmailUsersRow);
    res.send(gmailUsersRow);
});

app.get('/2022-users', async(req, res) => {
    const dbResult = await knex.raw(`SELECT * FROM users WHERE year(created_at) = '2022'`);
    //console.log(dbResult);
    const yearUsersRow = dbResult[0];
    console.log(yearUsersRow);
    res.send(yearUsersRow);
});

app.get('/user-count', async(req, res) => {
    const dbResult = await knex.raw(`SELECT count(*) AS 'number_of_users' FROM users`);
    //console.log(dbResult);
    const userCountRow = dbResult[0];
    console.log(userCountRow);
    //res.send(userCountRow)
    res.send(`Number of Users: ${userCountRow[0].number_of_users}`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});