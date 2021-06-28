const gulp = require('gulp');
const uglify = require('gulp-uglify');
const terser = require('gulp-terser');
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

const uglifyConfig = {
	// mangle: {
	// 	except: ['require', 'exports', 'module']
	// },
	keep_fnames: true,
	mangle: true,
	compress: {
		arguments: true
	}
};

const terserConfig = {
	keep_fnames: true,
	mangle: true,
	compress: {
		arguments: true
	}
}

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

const packSlim = function() {
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

const packFull = function() {
	return browserify({
		entries: './src/linq.full.js',
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
		.pipe(exorcist('./dist/linq.full.js.map', '', '', './dist/'))
		.pipe(source('linq.full.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./dist/'));
}

const unitSlim = function(cb) {
	require('./test/test-unit')(require('./src/linq'));
	cb && cb();
};

const unitFull = function(cb) {
	require('./test/full/test-unit')(require('./src/linq.full'));
	cb && cb();
};

const minSlim = function() {
	return gulp.src('./dist/linq.js')
		.pipe(rename('linq.min.js'))
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(uglify(uglifyConfig))
		// .pipe(terser(terserConfig))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/'));
};


const minFull = function() {
	return gulp.src('./dist/linq.full.js')
		.pipe(rename('linq.full.min.js'))
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(uglify(uglifyConfig))
		// .pipe(terser(terserConfig))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/'));
};

gulp.task('hint', hint);

gulp.task('unitSlim', gulp.series(hint, unitSlim));

gulp.task('unitFull', gulp.series(hint, unitFull));

gulp.task('packSlim', gulp.series(hint, unitSlim, packSlim));

gulp.task('packFull', gulp.series(hint, unitFull, packFull));

gulp.task('minSlim', gulp.series(hint, unitSlim, packSlim, minSlim));

gulp.task('minFull', gulp.series(hint, unitFull, packFull, minFull));

gulp.task('slim', gulp.series(hint, unitSlim, packSlim, minSlim));

gulp.task('full', gulp.series(hint, unitFull, packFull, minFull));

gulp.task('default', gulp.series(hint, unitSlim, unitFull, packSlim, packFull, minSlim, minFull));