const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// const imagemin  = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

// Utilidades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
// // Utilidades JS
// const terser from 'gulp-terser-js');
// const rename from 'gulp-rename');

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    // js: 'src/js/**/*.js'
}

function css() {
    return src(paths.scss)
        .pipe( sourcemaps.init() )
        .pipe( sass())
        .pipe( postcss([ autoprefixer(), cssnano() ]))
        .pipe( sourcemaps.write('.') )
        .pipe( dest('./build/css') )
}

// function javascript() {
//     return src(paths.js)
//         .pipe(sourcemaps.init())
//         .pipe( concat('bundle.js') )
//         .pipe( terser() )
//         .pipe(sourcemaps.write('.'))
//         .pipe( rename({ suffix: '.min' }))
//         .pipe( dest('./build/js') )
// }

// function imagenes() {
//     return src(paths.imagenes)
//         .pipe( imagemin() )
//         .pipe( dest( './build/img' ))
//         .pipe( notify({ message: 'Imagen Minificada'}) );
// }

function versionWebp() {
    return src(paths.imagenes)
        .pipe( webp() )
        .pipe( dest('./build/img'))
        .pipe( notify({message: 'Versión webP lista'}));
}

function watchArchivos() {
    watch( paths.scss, css ); // * = La carpeta actual - ** = Todos los archivos con esa extensión
    // watch(paths.js);
}

exports.css = css;
// exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series( css,  versionWebp, watchArchivos );

