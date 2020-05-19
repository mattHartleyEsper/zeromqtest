let id = process.argv[2];

let zmq = require("zeromq");
let sock = zmq.socket("pull");

sock.connect("tcp://127.0.0.1:3000");
console.log("node "+id+" connected to port 3000");

sock.on("message", (msg) => {
    switch(msg.toString()){
        case 'read-cpu-temp':
            console.log("getting cpu temp for node "+id);
            break;

        case 'restart-node':
            break;

        default:
            console.log("Unknown command");
    }
});