/**
 * Created by MN883H on 12/4/2017.
 */
const {Writable} = require('stream');

process.stdin.pipe(process.stdout);

const outStream = new Writable({
   /*write:function(chunk,encoding, callback){
       console.log(chunk.toString());
       callback();
   }*/

 write(chunk,encoding,callback){

       let _val = chunk.toString().concat(" ");
       console.log(`Writing _val ${_val}`);

       if(_val.trim() === 'end'){
           console.log(`Oh end`);
           process.exit(1);
       }
        console.log(`writing val ${_val.toUpperCase()} and chunk.toString() ${chunk.toString()}`);
        callback();
   }

});




process.stdin.on('end',()=>{
    process.stdout.write('From on end event ');
});

process.stdin.on('data',(chunk)=>{
    process.stdout.write(`From on Data event ${chunk.toString()}`);
    if(chunk.toString().trim() === 'end'){
        process.exit(1);
    }
});

process.on('SIGINT',()=>{
    process.stdout.write('\n end \n');
    process.exit(1);
});


// process.stdin.pipe(outStream);





