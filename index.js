var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: './www',
    port: 3002
});
 
server.start(function () {
  console.log('Server listening to', server.port);
});

 
server.on('symbolicLink', function (link, file) {

  console.log('File', link, 'is a link to', file);
});
 
server.on('response', function (req, res, err, file, stat) {

});