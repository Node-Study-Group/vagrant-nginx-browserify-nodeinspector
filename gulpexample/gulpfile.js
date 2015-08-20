var gulp = require('gulp');
var browserify = require("browserify");
var source = require('vinyl-source-stream');

gulp.task('scripts', function() {
  browserify('client/client.js', {debug: true}) // call browserify on our main client script
    .bundle() // have browserify bundle in all the requires
    .on('error', function(err){console.log(err);})
    .pipe(source('bundle.js')) // use vinyl-source-stream to create a temporary file to receive the bundled scripts
    .pipe(gulp.dest('public/build')); // ouput that bundle.js file to our public/build directory
});

gulp.task('watch', function() {
  gulp.watch(['client/**/*.js'],['scripts']); // execute the 'scripts' task everytime a client .js file is modified
});

gulp.task('default', ['scripts', 'watch']); // running 'gulp' runs the 'default' task, so here we have it browserify the client scripts initially and then have it start a watch process to see when any client scripts change
