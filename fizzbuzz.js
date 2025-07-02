
// since we're using nodejs, we'll read console input using node:readline as per
// https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs

// There doesn't seem to be a blocking reader (like scanf) available, 
// however we can use the promises API to get similar functionality

import { createInterface } from 'node:readline/promises';
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let rules=0
const R3  = 0b000001
const R5  = 0b000010
const R7  = 0b000100
const R11 = 0b001000
const R13 = 0b010000
const R17 = 0b100000


const nums = await rl.question("Enter rules to be used (prime numbers from 3 to 17 separated by a space) ");
for (let num of nums.split(" ")){
    switch (num){
        case "3":
            rules|=R3
            break;
        case "5":
            rules|=R5
            break;
        case "7":
            rules|=R7
            break;
        case "11":
            rules|=R11
            break;
        case "13":
            rules|=R13
            break;
        case "17":
            rules|=R17
            break;
    }
}



const limit = await rl.question("Enter a number: ");

for (let i=1; i<=limit; i++){
    

    let out = [];
    if (i%11==0 && rules&R11)
        out.push("Bong");
    else {
        if (i%3==0 && rules&R3)
            out.push("Fizz");
        if (i%5==0 && rules&R5)
            out.push("Buzz");
        if (i%7==0 && rules&R7)
            out.push("Bang");
    }
    if (i%13==0 && rules&R13){
        const fb = out.findIndex((i)=>{return i[0]==="B"});
        if (fb>=0)
            out.splice(fb,0,"Fezz");
        else
            out.push("Fezz");
    }
    if (i%17==0 && rules&R17){
        out.reverse();
    }
    if (out.length==0)
        out.push(i.toString());

    console.log(out.reduce((prev,cur)=>{return prev+cur},""));

}

rl.close()