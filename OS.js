const os = require('os')

const name = os.type();
const release = os.release();
console.log("OS Name:" + name);
console.log("OS Name: " + release);