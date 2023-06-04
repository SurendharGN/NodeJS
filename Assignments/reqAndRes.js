/*task: 1. set up a nodejs server on port 3000
         2.Add a greetings message on the '/' page.
         3. Collect the username of the user through a form which redirects to a page '/create-user' and log the data*/

const http=require('http')

const server=http.createServer((req,res)=>{
    url=req.url;
    method=req.method;

    // adding html to the localhost
    if (url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><h1>Greetings, please enter your name:</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
    return res.end();
    }

    // appending input data
    data=[] 

    if (url==='/create-user' && method==='POST'){
        // callback func when data is being processed
        req.on('data',(chunk)=>{data.push(chunk)});

        // callback func once the chunks are read 
        req.on('end',()=>{
            const parsedBody=Buffer.concat(data).toString();
            console.log(parsedBody.split("=")[1])
        });

        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end()
    }
    
});
server.listen(3000)