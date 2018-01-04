/**
 * Created by MN883H on 1/2/2018.
 */

const users = [
    {
        id:1,
        fname:'munis',
        lname:'nagarat',
        active:'Y',
        age:30
    },
    {
        id:2,
        fname:'two',
        lname:'nagarat',
        active:'N',
        age:43
    },
    {
        id:3,
        fname:'three',
        lname:'nagarat',
        active:'N',
        age:30
    },
    {
        id:4,
        fname:'four',
        lname:'nagarat',
        active:'Y',
        age:20
    },
    {
        id:5,
        fname:'five',
        lname:'nagarat',
        active:'Y',
        age:10
    }
];

const isActive = (item)=>item.active === 'Y';
const isNotActive = (item)=> !isActive(item);
const sumAges = (total,currItem)=>total+= currItem.age;

const activeUsers = users.filter(isActive)
    .reduce(sumAges,0);

console.dir(activeUsers);

const numbers = [10,20,28,19,31];

const reduced = numbers.map(n=>n-1);
console.dir(reduced);
const divisble = reduced.filter(n=>n%3===0);
console.dir(divisble);
const sum = divisble.reduce((acc,n)=>acc+n,0);

console.log(`The sum is ${sum}`);

//function composition
const subtractOne = (item)=>item-1;
const isDivisibleBy3 = (item)=>item%3===0;
const add = (acc,n)=>acc+n;

const sum1 = numbers.map(subtractOne)
                .filter(isDivisibleBy3)
                .reduce(add,0);

console.log(`Refactored sum is ${sum1}`);

const retFname = (item)=>item.fname;
const getActiveUserNames = (users)=>{
    const activeUsers = users.filter(isActive);
    return activeUsers.map(retFname);
};

console.dir(getActiveUserNames(users));

const users1 = [
    {
        id:1,
        fname:'munis',
        lname:'nagarat',
        active:'Y',
        age:30
    },
    {
        id:2,
        fname:'two',
        lname:'nagarat',
        active:'N',
        age:43
    },
    {
        id:3,
        fname:'three',
        lname:'nagarat',
        active:'N',
        age:30
    },
    {
        id:4,
        fname:'four',
        lname:'nagarat',
        active:'Y',
        age:20
    },
    {
        id:5,
        fname:'five',
        lname:'nagarat',
        active:'Y',
        age:10
    }
];

//partial application
const byId = (id)=>(item)=>item.id === id;

const deactivateUser = (item)=>{
    const currentUser = byId(item.id);
    users1.find(currentUser).active = 'N';
};

users1.forEach(deactivateUser);
console.dir(users1);


//function composition

const isEmptyString = (str)=>{
    const value = str?str:"";
    const trimmedValue = value.trim();
    return trimmedValue==='';
};

console.log(["some","","one"].some(isEmptyString));