/**
 * Created by MN883H on 12/7/2017.
 */

const server = require('http').createServer();

server.on('request',(req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<div>Hello World</div>');

    setTimeout(()=>{
        res.write('another message');
    },10000);

    setTimeout(()=>{
        res.write('yet another message');
    },20000);

});

server.listen(8000,()=>{
    console.log("Server listening on port 8000");
});