import * as Hapi from 'hapi';
import * as fs from 'fs'

var server = new Hapi.Server();

fs.readFile('.babelrc', 'utf8', (err, data) => {
    console.log(data);
});

server.connection({ port: 3000 })

server.route({
    path: '/hello',
    method: 'GET',
    handler: function(req, res) {
        res('Hello Sean');
    }
});

server.start(function() {
    console.log('Listening on ' + server.info.uri);
});