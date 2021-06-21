const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const exorcist = require('exorcist');
const sourcemaps = require('gulp-sourcemaps');
const jshint = require('gulp-jshint');
const extend = require('extend');

const babelConfig = require('./babel.config.json');

const hint = function() {
	return gulp.src('./src/**/*.js')
		.pipe(jshint({
			esversion: 6,
			strict: true,
			browser: true,
			node: true,
			validthis: true,
			globals: {
				self: false
			}
		}))
		.pipe(jshint.reporter('default'));
};

const pack = function() {
	return browserify({
		entries: './src/linq.js',
		standalone: 'Enumerable',
		debug: true,
		insertGlobalVars: {
			global: function() {
				return 'typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}';
			}
		}
	})
		.transform(babelify.configure(extend(true, babelConfig, { sourceMaps: true })))
		.bundle()
		.pipe(exorcist('./dist/linq.js.map', '', '', './dist/'))
		.pipe(source('linq.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./dist/'));
};

const unit = function(cb) {
	require('./test/test-unit')(require('./src/linq'));
	cb && cb();
};

const min = function() {
	return gulp.src('./dist/linq.js')
		.pipe(rename('linq.min.js'))
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(uglify({
			// mangle: {
			// 	except: ['require', 'exports', 'module']
			// },
			mangle: {
				keep_fnames: true
			},
			compress: true
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/'));
};

gulp.task('hint', hint);

gulp.task('unit', gulp.series(hint, unit));

gulp.task('pack', gulp.series(hint, unit, pack));

gulp.task('min', gulp.series(hint, unit, pack, min));

gulp.task('default', gulp.series(hint, unit, pack, min));