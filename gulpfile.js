var gulp        = require('gulp');
var sass        = require('gulp-sass');
var minify        = require('gulp-minify');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('lib/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function(){
    return gulp.src('lib/js/*.js')
        .pipe(minify())
        .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('serve', ['sass', 'js',], function() {
    browserSync.init({
        server: './dist'
    });
    gulp.watch('lib/scss/**/*.scss', ['sass']);
    gulp.watch('lib/js/**/*.js', ['js']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);