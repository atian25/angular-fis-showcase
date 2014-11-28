var app = require('app');

exports.name = 'menuCtrl';
exports.template = __inline('./menu.tpl.html');

app.controller(exports.name, function($scope){
  $scope.str = 'init';

  $scope.change = function(str){
    this.str = str;
  }
});

