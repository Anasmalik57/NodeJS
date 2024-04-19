const fs = require('fs')

const nodejsArchitectureInfo = `Node.js Architecture:
Node.js is built on Chrome's V8 JavaScript engine.
It uses an event-driven, non-blocking I/O model.
Node.js has a single-threaded event loop, which enables handling concurrent requests efficiently.
😄😄😄😄😄😄😄😄😄😄😄😄😄💻\n`;

// Writing the information into a new file......................
fs.writeFile(`nodejs_architecture.txt`, nodejsArchitectureInfo, function(err){
    if(err){
        console.log('Getting Error in writing content',err);
    }
    else{
        console.log('No Error in writing content',data);
    }
})