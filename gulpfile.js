const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserify = require('gulp-browserify');
const babelify = require('babelify');
const exorcist = require('exorcist');
const transform = require('vinyl-transform');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
	gulp.src('./src/linq.js')
		.pipe(browserify({
			transform: [ babelify.configure({
				presets: [ 'es2015', 'stage-3' ],
				sourceMaps: false
			}) ],
			standalone: 'Enumerable',
			debug: false,
			bundle: true,
			insertGlobalVars: {
				global: function() {
					return 'typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}';
				}
			}
		}))
		// .pipe(transform(() => exorcist('./dist/linq.js.map', '', '', './dist/')))
		.pipe(gulp.dest('./dist/'))
		.pipe(rename('linq.min.js'))
		// .pipe(sourcemaps.init())
		.pipe(uglify({
			mangle: {
				except: ['require', 'exports', 'module']
			},
			compress: true
		}))
		// .pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/'));
});