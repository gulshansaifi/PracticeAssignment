const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end<'!DOCTYPE html'>
  <html>
  <head>
  <script>
  function myFunction() {
    document.getElementById("demo").innerHTML = "You selected some text";
  }
  </script>
  </head>
  <body>
  
  Some text: <input type="text" value="Hello world!" onselect="myFunction()">
  
  <p id="demo"></p>
  
  </body>
  </html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
