var http=require('http');
var dt=new require('./myfirstModule');

 

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The current date and time is :"+dt.mydateTime());
    res.end();
}).listen(8080);