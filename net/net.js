/**
 * Created by MN883H on 12/20/2017.
 */

const server = require('net').createServer();

server.on('connection',(socket)=>{
    console.log('client connected');
    socket.write('Welcome to new client\n');

    socket.on('data',(data)=>{
        console.log(`data is ${data}`);
        // socket.write(`Data is ${data}`);
        socket.write(data+"\n");
    });

    socket.on('end',()=>{
        console.log(`Client disconnected`);
    });

});

server.listen(8000, ()=>console.log('Server bound'));