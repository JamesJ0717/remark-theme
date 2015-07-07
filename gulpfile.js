var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');

gulp.task('sass', function() {
    gulp.src('./src/remark_theme_blue_standard.sass')
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest('./blue_standard/'));
    gulp.src('./src/remark_theme_modern_japanese.sass')
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest('./modern_japanese/'));
});

gulp.task('default', function() {
    gulp.watch('./src/*.sass', ['sass']);
});
