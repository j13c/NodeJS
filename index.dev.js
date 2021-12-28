const colors = require('colors');
const express = require('express');

console.log('Iniciando server DEV ...'.green);

const server = express();

server.get('/', (req, res)=>{
    res.send(`<h1>Hellow World from Express</h1>`);
    res.end();
});

server.listen(3000, ()=>{
    console.log('Servidor listen on localhost::3000'.green)
});

