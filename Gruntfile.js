const sass = require('node-sass');

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'src/css/logmanager.dark.css': 'src/sass/logmanager.dark.scss',
                    'src/css/logmanager.light.css': 'src/sass/logmanager.light.scss',
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);
};
