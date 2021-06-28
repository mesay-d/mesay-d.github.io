/*
 Create a web server that's going to send a response of big image (bigger than 3MB)
to any client that sends a request to your specified server:port.
Use the best way for performance.
(Try to solve this in many different ways and inspect the loading time 
in the browser and send many requests to see the performance differences)
// */
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer();
// server.on('request', function (req, res) {
    
//     let image = fs.readFileSync('./titles.jpg');
//     res.end(image, 'binary');
// });
// server.listen(3000, () => console.log("...listning on 3000"));


const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
   const img= fs.createReadStream("titles.jpg")
   img.pipe(res);
});

server.listen(9000);