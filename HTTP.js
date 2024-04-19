const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.write('<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>')
    }
    else if(req.url == '/about'){
        res.write('<h1>Myself Anas</h1>')
    }
    res.end()
})
server.listen(5000)
console.log('This HTTP server is running on port 5000');