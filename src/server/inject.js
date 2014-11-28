'use strict';

var fs = require('fs');
var path = require('path');
var app = require('./index');
var express = require('express');

module.exports = function (dir) {
  if(app.get('env') === 'development'){

    dir = path.join(__dirname, dir || './inject');

    //mount inject path to static
    app.use('/inject', express.static(dir));

    //read inject scripts
    //var snippet = fs.readdirSync(dir)
    //  .map(function(fileName) {
    //    return {
    //      name: fileName,
    //      content: fs.readFileSync(path.join(dir, fileName)).toString()
    //    };
    //  })
    //  .map(function(item){
    //    return '<script>\r\n//' + item.name + '\r\n' + item.content + '\r\n</script>';
    //  });

    var snippet = fs.readdirSync(dir).map(function(fileName){
      return '<script src="/inject/' + fileName + '"></script>';
    });

    return require('connect-inject')({
      snippet: '\r\n<!-- inject debug scripts -->\r\n' + snippet.join('\r\n')
    });
  }
};
