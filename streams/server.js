/**
 * Created by MN883H on 12/4/2017.
 */
const fs = require('fs');
const server = require('http').createServer();

server.on('request',(req,res)=>{
    /*fs.readFile('./big.file',(err,data)=>{
        if(err)throw err;

        res.end(data);
    });*/

    const src = fs.createReadStream('./big.txt');
    src.pipe(res);
});

server.listen(8000);
console.log('listening on port 8000 http://localhost:8000');