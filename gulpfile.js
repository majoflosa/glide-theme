const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
// const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const copy = require('gulp-copy');
const livereload = require('gulp-livereload');

/* ============================================== 
    DEVELOPMENT TASKS
=============================================== */

// sass/css
gulp.task( 'sass-dev', () => {
    return gulp.src( './src/sass/**/*.sass' )
        .pipe( sass({outputStyle: 'expanded'}).on('error', sass.logError) )
        .pipe( gulp.dest('./src/css') );
});

// gulp.task( 'ts', () => {
//     return gulp.src( './src/ts/**/*.ts' )
//         .pipe( ts({outFile: 'ts-output.js'}) )
//         .pipe( gulp.dest( './src/js') );
// });
gulp.task( 'babel', ['concat-dev'], () => {
    return gulp.src( './src/js/script.js' )
        .pipe( babel({ presets: ['@babel/env'] }) )
        .pipe( gulp.dest('./src/js') )
})

// merge js
gulp.task('concat-dev', () => {
    // return gulp.src('./src/js/scripts/**/*.js')
    return gulp.src(['./src/js/lib/*.js', './src/js/scripts/*.js'])
        .pipe( concat('script.js') )
        .pipe( gulp.dest('./src/js') );
});


/* ============================================== 
    PRODUCTION TASKS
=============================================== */
// minify html
// const minhtmlOptions = {
//     collapseWhitespace: true,
//     removeComments: true
// };
// gulp.task('minify-html', () => {
//     return gulp.src( './src/*.html' )
//         .pipe( htmlmin(minhtmlOptions) )
//         .pipe( gulp.dest('./dist') );
// });
gulp.task( 'html', () => {
    return gulp.src( './src/*.html' )
        .pipe( gulp.dest('./dist') );
});

gulp.task('sass-prod', () => {
    return gulp.src( './src/sass/**/*.sass' )
        .pipe( sass({outputStyle: 'compressed'}).on('error', sass.logError) )
        .pipe( gulp.dest( './dist/css') );
});

// gulp.task('concat-prod', () => {
//     return gulp.src( './src/js/**/*.js' )
//         .pipe( concat('script.js') )
//         .pipe( gulp.dest('./src/js/') );
// });

const uglifyOption = {
    mangle: { toplevel: true },
    output: { beautify: false }
};
gulp.task( 'uglifyjs', () => {
    return gulp.src( './src/js/script.js' )
        .pipe( uglify(uglifyOption) )
        .pipe( gulp.dest('./dist/js') );
});

gulp.task( 'copyimg', () => {
    return gulp.src( './src/img/*' )
    .pipe( gulp.dest('./dist/img') );
});


/* ============================================== 
    WATCH TASKS
=============================================== */
// watch
gulp.task('watch', () => {
    // livereload.listen();
    gulp.watch( './src/sass/*', ['sass-dev', 'sass-prod'] );
    gulp.watch( './src/js/scripts/*', ['babel'] );
    gulp.watch( './src/js/script.js', ['uglifyjs'] );
    // gulp.watch( './src/js/script.js', ['uglifyjs'] );
    gulp.watch( './src/*.html', ['html'] );
    gulp.watch( './src/img/*', ['copyimg'] );
});

// gulp.task( 'serve', () => {
//     livereload({ start: true });
// });

// gulp.task( 'start', ['serve', 'watch']);
