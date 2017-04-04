const gulp = require('gulp');
const sass = require('gulp-sass');
const babelify = require('babelify');
const browserify = require('browserify');
const server = require('gulp-webserver');
const source = require('vinyl-source-stream');

gulp.task('server', () => {
    gulp.src('app')
        .pipe(server({
            open: true
        }));
});

gulp.task('js', () => {
    return browserify({
            entries: './src/js/app.jsx',
            extensions: ['.jsx'],
            debug: true
        })
        .transform('babelify', {
            presets: ['es2015', 'react'],
            plugins: ['transform-class-properties']
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('app/dist'));
});

gulp.task('css', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/dist'));
});

gulp.task('watch', ['default'], () => {
    gulp.watch('./src/**/*.jsx', ['js']);
    gulp.watch('./src/**/*.scss', ['css']);
});

gulp.task('default', ['js', 'css', 'server']);
