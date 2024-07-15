// 1. import 'http' module
const http = require('http');

// 2.create a server

const  server = http.createServer( (req,res) => {

// 3. create a default response

res.end(`שלום עולם`);



});



// 4. start the server 
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is runing on port http://localhost:${PORT}`)


});




