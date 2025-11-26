const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("watch", function () {
  gulp.watch("src/components/**/*.scss", async function () {
    gulp
      .src("src/components/**/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("src/css"));
  });
});
