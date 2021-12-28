const colors = require('colors');

console.log( "*********** Calc **********".yellow );
const calc = require('./calc');
console.log( calc.add(1,3).grey );
console.log( calc.subtraction(1,3).grey );
console.log( calc.multiplication(8,3).grey );
console.log( calc.division(1,10).grey );


console.log( "\n*********** OS **********".yellow );
const os = require('os');
console.log( os.homedir().blue );
console.log( os.tmpdir().blue );


console.log( "\n*********** FS **********".yellow );
const fs = require('fs');

fs.writeFile('FileSystem/prueba1.txt','texto de prueba',(err)=>{
    if (err) {
        console.log(err);
    }
    console.log("Final write file.\n".cyan);
});

fs.readFile('FileSystem/prueba1.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    if (data) {
        console.log(data.cyan);
        console.log( data.toString().cyan );
    }
    console.log('Fin de read file. \n'.cyan);
});


console.log( "\n*********** HTTP **********".yellow );
const http = require('http');
/*
http.createServer( (req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.write('<h1>Hellow World FROM Node JS</h1>');
    res.end();
}).listen(3000);
*/

const handleServer = (req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write('<h1>Hellow World FROM Node JS</h1>');
    res.end();
}
//http.createServer( handleServer ).listen(3000)

const server = http.createServer( handleServer );
server.listen(3000,()=>{
    console.log('Server on port 3000'.green)
})

console.log( "\n*********** NPM **********".yellow );
