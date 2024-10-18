//Start Here :
const http = require('http');
//request and response are both build in objects that the createServer function can take as a paramater.
const server = http.createServer((req , res)=>{
    //console.log(req);
    if(req.url === '/'){
    res.write('Welcome to Nigga clan Home page.');
    res.end();
    }
    else if(req.url ==='/about'){
        res.write('Welcome to ABOUTTTTTTTTTTTTTT');
        res.end();
    }
    else {
        res.write('<h1>Xaina esto kei page.</h1><p>This page does not exist. You can return back to home page by clicking the button below: </p><a href="/">here</a>');
        res.end();
    }
 })
 server.listen(5000);