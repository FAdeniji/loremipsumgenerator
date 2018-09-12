let routes = require('./routes.js');
let fs = require('fs');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('./' + req.url, function(err, data) {
        if (!err) {
            var dotoffset = req.url.lastIndexOf('.');
            var mimetype = dotoffset == -1
                            ? 'text/plain'
                            : {
                                '.ico' : 'image/x-icon',
                                '.jpg' : 'image/jpeg',
                                '.png' : 'image/png',
                                '.gif' : 'image/gif',
                                '.css' : 'text/css',
                                '.js' : 'text/javascript'
                                }[ req.url.substr(dotoffset) ];
            res.writeHead(200, {'Content-type' : mimetype});
            res.end(data);
            console.log( req.url, mimetype );
        } else {
            console.log ('file not found: ' + req.url);
            res.writeHead(404, "Not Found");
            res.end();
        }
    });
    routes.home(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
