const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserify = require('gulp-browserify');
const babelify = require('babelify');

gulp.task('default', function() {
	gulp.src('./src/linq.js')
			.pipe(browserify({ transform: [ babelify ], standalone: 'Enumerable', debug: false, bundle: true,
				insertGlobalVars: {
				    global: function () {
				        return 'typeof global !== "undefined" ? global : '
				            + 'typeof window !== "undefined" ? window : '
				            + 'typeof self !== "undefined" ? self : {}'
				        ;
				    }
				}
			}))
    		.pipe(gulp.dest('./dist/'))
			.pipe(rename('linq.min.js'))
			.pipe(uglify({mangle:{ except: ['require', 'exports', 'module'] }, compress:true}))
			.pipe(gulp.dest('./dist/'));
});