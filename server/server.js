const { json } = require('express');
const express = require('express')
const json_db = require('./db.json');
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(cors())


const port = 8001

app.get('/', (req, res) => {
    res.status(404).send("Route does not exist.")
})

app.get('/blogs', (req, res) => {
    res.send(json_db)
})

app.get('/blogs/:id', (req, res) => {
    res.send(json_db.blogs[req.params.id - 1])
})

app.post('/blogs', (req, res) => {

    console.log(req.body)
    new_entry = {
        ...req.body,
        'id': json_db.blogs.length + 1
    }

    json_db.blogs.push(new_entry)
    const json_db_str = JSON.stringify(json_db);

    var fs = require('fs');
    fs.writeFile('db.json', json_db_str, 'utf8', () => { res.status(200).send() });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})