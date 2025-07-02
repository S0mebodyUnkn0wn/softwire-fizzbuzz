



for (let i=1; i<=256; i++){
    

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

