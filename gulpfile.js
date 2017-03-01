/**
 * Gulp modules for our tasks.
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const server = require('gulp-webserver');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const util = require('gulp-util');
var exec = require('child_process').exec;

/**
 * Compile our styles sass file into css and write it to the dist directory.
 */
gulp.task('sass', function () {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', util.log))
        .pipe(gulp.dest('dist/'));
});

/**
 * Clean our javascript script file out of the dist directory.
 */
gulp.task('clean-scripts', function () {
    return gulp.src('dist/*.js', {read: false})
        .pipe(clean());
});

/**
 * Clean our old javascript script file out, concatenate all js files,
 * uglify them, and then write them to dist.
 */
gulp.task('js', ['clean-scripts'], function() {
    gulp.src('src/js/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify().on('error', util.log)) // Comment this line out for debugging
        .pipe(gulp.dest('dist/'));
});

/**
 * Serve our dist directory to localhost:3000 and turn live reload on.
 */
gulp.task('serve', function () {
    gulp.src('./dist')
        .pipe(server({
            livereload: true,
			fallback: 'index.html',
			host: "0.0.0.0",
            port: 3000
        }));
});

/**
 * Watch task for all three sass folders and the js folder.
 */
gulp.task('watch', function () {
    gulp.watch('./src/sass/global/*.scss', ['sass']);
    gulp.watch('./src/sass/sections/*.scss', ['sass']);
    gulp.watch('./src/sass/util/*.scss', ['sass']);
    gulp.watch('./src/js/*.js', ['js']);
});

/**
 * Deploys our dist directory to our github pages branch (which is our live site).
 */
gulp.task('deploy', function (cb) {
    exec('git push origin --delete gh-page; git subtree push --prefix dist origin gh-pages', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

/**
 * Run all of our gulp tasks.
 */
gulp.task('default', ['sass', 'js', 'serve', 'watch']);
