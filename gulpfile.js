const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");
const imagemin = require('gulp-imagemin');

gulp.task("sass-compile", function() {
	return gulp.src("./sass/**/*.sass")
	.pipe(sourcemaps.init())
	.pipe(sass().on("error", sass.logError))
	.pipe(sourcemaps.write("./"))
	.pipe(gulp.dest("./css/"))
});
gulp.task("compress", () =>
    gulp.src("img_original/**/*.*")
        .pipe(imagemin())
        .pipe(gulp.dest("assets/img"))
);
gulp.task("watch", function() {
	gulp.watch("./sass/**/*.sass", gulp.series("sass-compile"));
})