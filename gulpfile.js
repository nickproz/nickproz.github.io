var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var server = require('gulp-webserver');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('clean-scripts', function () {
    return gulp.src('dist/js/*.js', {read: false})
               .pipe(clean());
});

gulp.task('js', ['clean-scripts'], function() {
  gulp.src('src/js/*.js')
    .pipe(concat('script.js'))
    //.pipe(uglify()) // Comment this line out for debugging
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('serve', function () {
    gulp.src('./dist')
        .pipe(server({
            livereload: true,
			fallback: 'index.html',
			host: "0.0.0.0",
            port: 3000,
        }));
});

gulp.task('watch', function () {
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/js/*.js', ['js']);
});

gulp.task('default', ['sass', 'js', 'serve', 'watch']);

// Log errors to the console (mainly for JS debugging)
process.on('uncaughtException', function(error) {
    console.log(error);
    process.exit(1)
});
