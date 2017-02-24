'use strict';var _hapi = require('hapi');var Hapi = _interopRequireWildcard(_hapi);
var _fs = require('fs');var fs = _interopRequireWildcard(_fs);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}

var server = new Hapi.Server();

fs.readFile('.babelrc', 'utf8', function (err, data) {
    console.log(data);
});

server.connection({ port: 3000 });

server.route({
    path: '/hello',
    method: 'GET',
    handler: function handler(req, res) {
        res('Hello Sean');
    } });


server.start(function () {
    console.log('Listening on ' + server.info.uri);
});
//# sourceMappingURL=server.js.map