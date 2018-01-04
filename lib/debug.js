/**
 * Created by MN883H on 1/2/2018.
 */

function negativeSum(...args){
    return args.reduce((arg,total)=>
    total-arg
        ,0);
}

console.log(negativeSum(1,5,10));