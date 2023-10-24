const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compSass() {
  return gulp.src('./source/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'));
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

gulp.task('imagemin', () => {//o nome da função ficou "imagemin"
    return gulp.src('./source/images/*') // caminho das imagens originais
      .pipe(imagemin())
      .pipe(gulp.dest('./build/images')); // caminho de destino das imagens otimizadas
  });

   // Criei uma tarefa padrão
gulp.task('default', gulp.series('imagemin')); 


exports.default = function () {
  gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, compSass);
  gulp.watch('./source/images/*', {ignoreInitial:false}, gulp.series(imagemin));
  gulp.watch('./source/scripts/*.js', {ignoreInitial:false}, gulp.series(comprimeJavaScript));
};

