const fs = require('fs')



// Append additional data (advantages of Node.js)
const advantages = `Advantages of Node.js:
        - Non-blocking I/O operations make it efficient for handling concurrent requests.
        - JavaScript-based, allowing developers to use the same language on both the client and server sides.
        - Large ecosystem of libraries and modules available through npm.`;

// const upadatedContent = data + advantages;   
// Write the updated content back to nodejs_architecture.txt
fs.appendFile('nodejs_architecture.txt', advantages, (err2) => {
    if (err2) {
        console.log(`Error in updating Content`, err);
    }
    else {
        console.log(`Content Updated`);
    }
})

// Now we are going to print the data on console
fs.readFile('nodejs_architecture.txt', 'utf8', (err2, data2) => {
    if (err2) {
        console.log('Getting Error', err2);
    }
    else {
        console.log(`Updated Content\n`, data2);
    }
})

