// 1. import 'http' module
const http = require('http');
const path = require('path');
const fs = require('fs');

// 2.create a server

const server = http.createServer((req, res) => {

    // 3. create a default response

    //res.end(`שלום עולם`);

    // 3.1 parse url and determinate filename 
    console.log(`requesr url:    ${req.url}`);

    const url = req.url === '/' ? 'index.html' : req.url;

    // http://localhost:3000/file.html    ===>    c:\......\file.html
    // http:\\localhost:3000\file.html   ==>  C:\_course\LES1\fileServer\public\file.html
    const filePath = path.join(__dirname, "public", url);
    console.log(`file path :    ${filePath}`);







    // 3.2 if no 'path' is defined,return 'index.html'


    // 3.3 else look for the disierd file

    fs.readFile(filePath, (error, content) => {
        // 1. check for errors , if error 404.html 
        // 2. if all is well , return file
        if (error != null) {
            if (error.code === 'ENOENT') {
                const errorFile = path.join(__dirname, "public", "404.html");
                fs.readFile(errorFile, (err, data) => {

                    // assuming all is ok
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(data, 'utf8');

                });

            }else {
                res.writeHead(500);
                res.end(`server error: ${error.code}`);



            }

        } else {

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');

        }

    });




    // 3.4 if file not found - send error 
    // 3.5 if the file found - return file 





});



// 4. start the server 
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server is runing on port http://localhost:${PORT}`)


});




