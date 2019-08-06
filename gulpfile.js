const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('compilar-scripts', function(){
    return gulp.src('js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('minify'))
} ) 

gulp.task('compilar-css', function(){
    return gulp.src('css/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest('style'))
} )