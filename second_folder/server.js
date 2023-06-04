const http = require ('http');

// create a server with the http variable
const server = http.createServer(function(req, res) {
    // Headers
    res.writeHead(200, {'Content-Type': 'html'});

    // send back some information
    // res.end(`
    //     {
    //     "name": "Adam",
    //     "college": "Unilag",
    //     "occupation": "software developer"
    // }
   
    // `);
    res.end (`
    <html>
        <body style="background: black; text-align: center; color: white;">
            <h1>welcome</h1>
            <h4>Training  on how to build a server with node </h4>

        </body
    </html>
    `)
});

server.listen(4000, "127.0.0.1");

console.log("server connected to port 4000");

 