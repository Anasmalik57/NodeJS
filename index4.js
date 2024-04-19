const fs = require('fs');

fs.unlink('nodejs_architecture.txt', (err)=>{
    if(err){
        console.log(`Error in Deleting File`);
    }
    else{
        console.log(`File Deletion Completed`);
    }
})