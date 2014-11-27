require.config(__FRAMEWORK_CONFIG__);

var allTestFiles = ['angular', 'angular-mocks'];

Object.keys(window.__karma__.files).forEach(function(file) {
  //if(/.*?\/components\/.*?\.spec\.js$/i.test(file)){
  if(/.*?\.spec\.js$/i.test(file)){
    var id = file.replace(/^\/.*?public\//, '');
    allTestFiles.push(id);
    console.log('loading: %s', id);
  }
});

window.__karma__.loaded = function(){};

setTimeout(function(){
  require.async(allTestFiles, function(){
    window.__karma__.start();
  });
}, 10);