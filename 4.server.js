const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // console.log("request made")
    // console.log(req, req.url, req.method)

    // res.setHeader('Content-Type', 'text/plain') setHeader
    // res.write('Hello, Ninja')
    // res.end()

    res.setHeader('Content-Type', 'text/html') 
    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('<p>Hello, luigi</p>')
    // res.write('<p>Hello, Ninja</p>')
    // res.end()
    let path = './';
    switch(req.url){
        case '/':
            path += '4.index.html';
            res.statusCode = 200;
        break;
        case '/about':
            path += '4.about.html';
            res.statusCode = 200;
        break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end
        break;
        default:
            path += '4.404.html';
            res.statusCode = 404;
        break;
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err)
            res.end()
        }else{
            // res.write(data)
            res.end(data)
        }
    })
})

server.listen(3000, 'localhost', ()=>{
    console.log('Server listen at port 3000')
})