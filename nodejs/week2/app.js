const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const knex = require("./database.js");
const snippetsrouter = require("./api/snippets");

app.use(express.json())
app.use("/api/snippets", snippetsrouter);

app.get('/', (req, res) => {
  res.send('Hello Class!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})