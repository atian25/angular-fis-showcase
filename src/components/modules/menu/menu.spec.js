require('modules/menu');

describe('menuCtrl', function(){
  var ctrl, $scope;

  beforeEach(angular.mock.module('TestApp'));

  beforeEach(inject(function($controller, $rootScope){
    $scope = $rootScope.$new();
    ctrl = $controller('menuCtrl', {$scope: $scope});
  }));

  it('change scope value', function(){
    expect($scope.str).toEqual('init');
    $scope.change('test');
    expect($scope.str).toEqual('test');
  });
});