let zmq = require("zeromq");
let socket = zmq.socket("push");

socket.bindSync("tcp://127.0.0.1:3000");
console.log("master bound to port 3000");
console.log("");
console.log("Asking for cpu temp in ...");

let iteration = 10;
let theInterval = setInterval(()=>{
    if( iteration > 0){
        console.log(iteration);
        iteration--;
    }else{
        console.log("Asking for cpu temperature");
        socket.send("read-cpu-temp");
        clearInterval(theInterval);
    }
},300)

