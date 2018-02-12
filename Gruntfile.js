module.exports = function (grunt) {

  var task = grunt.task;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      'start-server-dev': {
        command: './node_modules/.bin/nodemon bin/www'
      },
      'webpack': {
        command: 'webpack'
      },
      'webpack-watching': {
        command: 'webpack --watch'
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', function () {
    var log = grunt.log;
    log.subhead('来自Grunt的帮助');
    log.writeln(' ');
    log.writeln(' grunt dev       : 编译一次webpack，并启动koa服务');
    log.writeln(' grunt fedev     : 启动前端watching开发模式');
    log.writeln(' ');
    log.writeln('启动后访问 127.0.0.1:3000 来查看启动情况');
  });

  grunt.registerTask('dev', function () {
    task.run([
      'exec:webpack',
      'exec:start-server-dev'
    ]);
  });

  grunt.registerTask('fedev', function () {
    task.run([
      'exec:webpack-watching'
    ]);
  })
}