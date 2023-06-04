
const fs=require('fs')
const routes=(req,res)=>{
    
    res.setHeader('Content-Type','text/html');
    
    // connecting both the req and res objects
    // task: when the url is /, user can enter a data when  has to be stored in a file in the server.

    const url = req.url;
    const method=req.method;
     
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter input</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end()
    }

    if(url === '/message' && method === "POST"){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
            
            
        });
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody)
            console.log(body)
            const message=parsedBody.split("=")[1];
            fs.writeFileSync('message.txt',message );

        })
        
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end()
    }
}
module.exports=routes