// Karma configuration
// Generated on 2017-01-13

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: './',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    // list of files / patterns to load in the browser
    files: [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular-mocks.js',
      'src/**/**.js'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // preprocessors: {
    //   'app/**/**.js': 'coverage',
    //   'app/views/*.html': 'ng-html2js'
    // },

    // ngHtml2JsPreprocessor: {
    //   stripPrefix: 'app/'
    // },

    // coverage reporter generates the coverage
    // reporters: ['dots', 'coverage'],

    // optionally, configure the reporter
    // coverageReporter: {
    //   dir : './coverage/',
    //   reporters: [
    //     { type: 'html', subdir: 'report-html'},
    //     { type: 'cobertura', subdir: '.', file: 'cobertura.xml' },
    //   ]
    // },

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};