/**
 * Created by MN883H on 12/4/2017.
 */
const {Readable} = require('stream');
/*
const inStream = new Readable();

inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
inStream.push(null);

inStream.pipe(process.stdout);*/


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

inStream.pipe(process.stdout);