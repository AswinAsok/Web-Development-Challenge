// var http  = require('http')

// http.createServer(sever).listen(3000);

// function sever(req,res){
//     res.write('Packapeer')
//     res.end()
// }


var http  = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function(req,res){

    var q = url.parse(req.url,true) 
    console.log(q.pathname); 
    
    if(q.pathname==='/'){
 
    fs.readFile('serhtml.html',function(err,data){
                
        res.writeHead(200,{"Content-type":"text/html"})
        res.write(data)
        res.end()
        })
    }
    else if(q.pathname==='/signup'){
        fs.readFile("form.html",(err,data) => { 
        res.writeHead(200,{"Content-type":"text/html"})
        res.write(data)
        res.end();
        })
    }
    else if(q.pathname === "/signupaction"){


        console.log(q.query);

        res.writeHead(200,{"Content-type":"text/html"})

        res.write("<h1>"+q.query.fullname+"</h>")
        res.end()
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.write("Error")
        res.end()
    }

}).listen(7500,() => console.log("Server is Runinng"))

