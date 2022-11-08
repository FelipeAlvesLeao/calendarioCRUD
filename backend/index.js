
import config from './sqlConfig.js'

const express = require('express');
const app = express();
const port = 3001;
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection(config);

app.get('/getList', (req, res) => {
    let SQL = "SELECT * FROM tarefas";
    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})

app.post("/registro", (req, res)=>{
    const title = req.body.title;
    const time = req.body.tempo;
    const descric = req.body.descric;
    const aux = ":00";
    const tempo = time + aux;
    let SQL = "INSERT INTO tarefas (title,descric,tempo) VALUES (?, ?,?)"
    db.query(SQL, [title, descric, tempo], (err, result) =>   {if(err)console.log(err) ; else console.log("Sucesso!")}
    )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})