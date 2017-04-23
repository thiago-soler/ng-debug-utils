// Generated on 2017-04-22 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // // Automatically load required Grunt tasks
    // require('jit-grunt')(grunt, {
    //     useminPrepare: 'grunt-usemin'
    // });

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'src',
        dist: 'dist',
        example: 'example'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            
            js: {
            
                files: ['<%= yeoman.app %>/**/**.js'],
                tasks: ['newer:jshint:all', 'newer:jscs:all'],
                
                options: {
            
                    livereload: '<%= connect.options.livereload %>'

                }
            
            },

            gruntfile: {
            
                files: ['Gruntfile.js']
            
            },
            
            livereload: {
                
                options: {
                
                    livereload: '<%= connect.options.livereload %>'
                
                },
            
                files: [
                    '<%= yeoman.example %>/{,*/}*.html',
                ]
            
            }

        },

        // The actual grunt server settings
        connect: {

            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },

            livereload: {
                
                options: {
                    
                    base: ['src', 'example'],
                    open: true
                
                }

            },
            test: {
                
                options: {
                    port: 9001,
                    
                    middleware: function (connect) {
                    
                        return [
                            connect().use(
                                '/src',
                                connect.static('./src')
                            ),
                            connect().use(
                                '/example',
                                connect.static('./example')
                            ),
                            connect.static(appConfig.app)

                        ];
                    
                    }
                
                }

            },
            dist: {
                
                options: {
            
                    open: true,
                    base: '<%= yeoman.dist %>'
                
                }
            
            }
        },

        // Empties folders to start fresh
        clean: {

            dist: {
            
                files: [{
                    
                    dot: true,
                    
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/{,*/}*',
                        '!<%= yeoman.dist %>/.git{,*/}*'
                    ]

                }]
            
            },
            
            server: '.tmp'
        },

        concat: {

            dist: {
            
                src: ['<%= yeoman.app %>/**.js', '<%= yeoman.app %>/**/**.js'],
                dest: '<%= yeoman.dist %>/ng-debug-utils.js',
            
            }

        },

        // Automatically inject Bower components into the app
        wiredep: {

            app: {
                src: ['<%= yeoman.app %>/index.html'],
                ignorePath:  /\.\.\//
            }

        },



        // Make sure there are no obvious mistakes
        jshint: {

            options: {
            
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            
            },
            all: {
            
                src: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/**/**.js'
                ]
            
            }
        
        },

        // Make sure code styles are up to par
        jscs: {
            
            options: {
                config: '.jscsrc',
                verbose: true
            },
            
            all: {
        
                src: [
                    'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js'
                ]
        
            },
            
            test: {
        
                src: ['test/spec/{,*/}*.js']
        
            }
        
        }




    });

    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
            
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'connect:livereload',
            'watch'
        ]);
    });

};