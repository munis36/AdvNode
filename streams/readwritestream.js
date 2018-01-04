/**
 * Created by MN883H on 12/4/2017.
 */

const {Writable,Readable} = require('stream');

const inStream = new Readable({
    read(size){
        setTimeout(()=>{
            if(this.currentCharCode > 90){
                this.push(null);
                return;
            }
            this.push(String.fromCharCode(this.currentCharCode++));

        },100);
    }
});

inStream.currentCharCode = 65;

// inStream.pipe(process.stdout);

const outStream = new Writable({
    write(chunk,encoding='utf-8',callback){
        console.log(chunk.toString());
        callback();
    }
});

inStream.pipe(outStream);




// process.stdin.pipe(process.stdout);