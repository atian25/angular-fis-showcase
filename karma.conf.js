// Karma configuration
// Generated on Mon Apr 14 2014 18:01:47 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'jasmine',
      'fis'
    ],

    // list of files / patterns to load in the browser
    files: [
      //监控源码
      {pattern: 'src/**/*.*', included: false, served: false, watched: true}
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocess or
    preprocessors: {
    },

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'larva-cli'
      //require('./test/karma-fis.js')
    ],

    client: {
    },


    fis: {
      //cmd: 'larva karma -r ./src -cd ./dist',
      files: [
        'dist/public/scrat.js',
        'dist/public/**/*.js',
        'dist/public/test/test-main.js'
      ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    //browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
