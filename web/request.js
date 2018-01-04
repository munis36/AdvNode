/**
 * Created by MN883H on 12/7/2017.
 */


const http = require('http');

/*
const google = http.createClient(8080, 'one.proxy.att.com');
const request = google.request('GET', '/',
    {'host': 'www.google.com'},(res)=>{
        console.log(res.statusCode);
        console.log(res.headers);
    });
request.end();
*/



const req = http.request({
    // hostname:'wwww.google.com',
    host:"one.proxy.att.com",
    port:8080,
    path:"www.google.com",
    method:'GET'
},(res)=>{
    console.log(res.statusCode);
    console.log(res.headers);
    console.log(`writing chunk`);
    res.setEncoding('utf-8');
    res.on('data',(chunk)=>{
        console.log(chunk);
    })
});


req.on('error',(e)=>{
    console.log(e);
});

req.end();
// req.write();



/*

const http = require("http");

const options = {
    host: "one.proxy.att.com",
    port: 8080,
    path: "http://www.google.com",
    headers: {
        Host: "www.google.com"
    }
};
http.get(options, (res)=> {
    console.log(res.statusCode);
    console.log(res.headers);
    console.dir(res);
    // res.pipe(process.stdout);
});

*/
