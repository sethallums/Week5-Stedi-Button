const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/seth', (req,res) => {res.send("Hello Seth")});

app.listen(port, ()=>console.log("Listening"));