let renderer = require('./renderer.js');
let generator = require('./js/generator.js');
let querystring = require('querystring');

const commonHeaders = {'Content-Type': 'text/html'};

function home(req, res) {

  if(req.url === '/') {
    if (req.method.toLowerCase() === 'get') {
      // show search
      res.writeHead(200, commonHeaders);

      renderer.view("header", {}, res);
      renderer.view("main", {}, res);
      renderer.view("lorem", {}, res);
      renderer.view("footer", {}, res);

      res.end();

    } else {
      console.log(req.url);

      req.on('data', function(postBody) {

        let query = querystring.parse(postBody.toString());

        const num = parseInt(query.txtNumber);
        const wordType = query.type;
        const chkBox = query.checkbox;

        let generatedWords = generator.generateWords(num, wordType, chkBox);

        res.writeHead(200, commonHeaders);

        renderer.view("header", {}, res);
        renderer.view("result", {result: generatedWords}, res);
        renderer.view("lorem", {}, res);
        renderer.view("footer", {}, res);

        res.end();

      });

    }
  }
}

module.exports = {
  home: home
}
