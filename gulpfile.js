const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', async function(done) { 
  console.log('start')
  return gulp.src('sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('styles'))
  .on('end', done)
})

gulp.task('sass:watch', () => {
  gulp.watch('sass/*.scss', gulp.series('sass'));
});