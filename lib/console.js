/**
 * Created by MN883H on 1/2/2018.
 */

const fs = require('fs');
const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

const console2 = new console.Console(out,err);

setInterval(function(){
    console2.log(new Date());
    console.log(new Date());
    console2.error(new Error('Whoops'));
    console.log(new Error('Whoops'));
},3000);