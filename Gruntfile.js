module.exports = function (grunt) {

  var task = grunt.task;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      'start-server-dev': {
        command: './node_modules/.bin/nodemon bin/www'
      } 
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', function () {
    task.run([
      'exec:start-server-dev'
    ]);
  });
}