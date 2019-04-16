var gulp = require("gulp");
var scss = require("gulp-sass");
gulp.task("sass", function("./src/scss*.scss") {
    .pipe(scss());
    .pipe(gulp.dest("./src/scss/"));
})