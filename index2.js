const fs = require('fs')

// Reading the information From a File......................

fs.readFile('nodejs_architecture.txt', 'utf8', function(err, data){
    if(err){
        console.log(`Getting Error in Reading File`, err);
    }
    else{
        console.log(`Doesn't face any problem to reading data from file.The Data is : \n👇👇👇👇👇 `);
        console.log(data);
    }

})