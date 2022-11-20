const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get('/users', async (req, res) => {
    try{
        const [usersDb] = await knex.raw('select * from users');
        res.send(usersDb)
        console.log(usersDb);
    } catch (error) {
        throw error;
      }
});

//GET /api/snippets to get a list of snippets
router.get('/snippets', async (req, res) => {
    try{
        const [usersDb] = await knex.raw('select * from snippets');
        res.send(usersDb)
        console.log(usersDb);
    } catch (error) {
        throw error;
      }
});

//GET /api/snippets/:id to get a single snippet
router.get('/snippets/:id', async (req, res) => {
    try{
        const id = req.params['id'];
        console.log(req.header("Authorization"))
        console.log(id);
        const [usersDb] = await knex.raw(`select * from snippets where id = ${id}`);
        res.send(usersDb)
        console.log(usersDb);
    } catch (error) {
        throw error;
      }
});


module.exports = router;