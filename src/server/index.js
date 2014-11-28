'use strict';

var meta = require('../package.json'),
    express = require('express'),
    compress = require('compression'),
    path = require('path'),
    app = module.exports = express(),
    middleware = ['combo', 'router', 'proxy', 'static', 'error', 'inject'];

// lazy load middlewares
middleware.forEach(function (m) {
    middleware.__defineGetter__(m, function () {
        return require('./' + m);
    });
});

process.on('uncaughtException', function (err) {
    (app.get('logger') || console).error('Uncaught exception:\n', err.stack);
});

app.set('name', meta.name);
app.set('version', meta.version);
app.set('port', process.env.PORT || 5000);
app.set('root', path.resolve(__dirname, '../').replace(/\/+$/, ''));
app.set('logger', console);
app.enable('trust proxy');

app.use(compress());
if(app.get('env') === 'development') {
    app.use(middleware.inject());
}
app.use('/co', middleware.combo('/public'));
app.use(middleware.router({index: '/' + meta.name + '/' + meta.version + '/index.html'}));
// app.use('/api/*', middleware.proxy('http://cors-api-host'));
app.use(middleware.static());
app.use(middleware.error());

if (require.main === module) {
    app.listen(app.get('port'), function () {
        console.log('[%s] Express server listening on port %d',
            app.get('env').toUpperCase(), app.get('port'));
    });
}