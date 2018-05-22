
setInterval(()=>{
    const count = Math.floor(Math.random() * 3) + 1;
    count !== 1 && process.stdout.write("\x1b[0m.");
}, 10);

setInterval(()=>{
    process.stdout.write("\x1b[34m.");
}, 600);

setInterval(()=>{
    process.stdout.write("\x1b[32m.");
}, 1000);
