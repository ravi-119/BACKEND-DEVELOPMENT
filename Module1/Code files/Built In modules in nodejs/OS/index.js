let os = require('os');

console.log("CPU Architecture  " + os.arch());

console.log("Free memory  " + os.freemem());

console.log("Total memory  " + os.totalmem());

console.log("Network interfaces: " + JSON.stringify(os.networkInterfaces()));

console.log("os temp dir :" + os.tmpdir());







console.log("Endianess :" + os.endianness());

console.log("Hostname :" + os.hostname());

console.log("os type :" + os.type());

console.log(" os platform :" + os.platform());

console.log(" os release :" + os.release());
