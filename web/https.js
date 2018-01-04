/**
 * Created by MN883H on 12/7/2017.
 */

const fs = require('fs');

const server = require('https').createServer({
    key:fs.readFileSync('./ssl/key.pem'),
    cert:fs.readFileSync('./ssl/cert.pem')
});

server.on('request',(req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello World\n');
});

server.listen(8001,()=>{
    console.log(`Server listening on port ${8001}`);
});