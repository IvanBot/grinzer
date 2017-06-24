const gulp     = require('gulp');
const bs       = require('browser-sync').create();
const sass     = require('gulp-sass');
const pug      = require('gulp-pug');
const clean    = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const newer    = require('gulp-newer');

gulp.task('views', function () {
    return gulp.src('build/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('app'))
        .pipe(bs.reload({stream:true}));
});

gulp.task('sass', function() {
    return gulp.src("build/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(bs.reload({stream:true}));
});

gulp.task('serve', gulp.series('sass', 'views', function() {

    bs.init({
        server: "./app"
    });

    gulp.watch("build/*.pug", gulp.series('views'));
    gulp.watch("build/scss/*.scss", gulp.series('sass'));
    // gulp.watch("app/*.html").on('change', bs.reload);
}));

// CLEAR DIRECTORY
gulp.task('clear', function() {
    return gulp.src('app/*', {read: false}).pipe(clean());
});

// ASSETS
gulp.task('assets', function () {
    return gulp.src(['build/**/*.*', '!build/**/*.{scss,js,pug}'])
        .pipe(gulp.dest('app'));
});

// OPTIMIZE IMAGE
gulp.task('optimize:img', function() {
    return gulp.src('app/**/*.{png,gif,jpeg,svg}')
        .pipe(newer('app'))
        .pipe(imagemin())
        .pipe(gulp.dest('app'));
});


gulp.task('default', gulp.series('clear','assets', 'optimize:img', 'serve'));
