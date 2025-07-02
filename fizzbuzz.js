

// since we're using nodejs, we'll read console input using node:readline as per
// https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// There doesn't seem to be a blocking reader (like scanf) available, 
// so we'll wrap our program into a callback to rl.question()
rl.question("Enter a number: ", (limit)=>{

    for (let i=1; i<=limit; i++){
        

        let out = [];
        if (i%11==0)
            out.push("Bong");
        else {
            if (i%3==0)
                out.push("Fizz");
            if (i%5==0)
                out.push("Buzz");
            if (i%7==0)
                out.push("Bang");
        }
        if (i%13==0){
            const fb = out.findIndex((i)=>{return i[0]==="B"});
            if (fb>=0)
                out.splice(fb,0,"Fezz");
            else
                out.push("Fezz");
        }
        if (i%17==0){
            out.reverse();
        }
        if (out.length==0)
            out.push(i.toString());

        console.log(out.reduce((prev,cur)=>{return prev+cur},""));

    }

    rl.close()
})