'use strict';
var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();

var vendorPath = 'js/vendor/';

var paths = [
  vendorPath + 'datatables/media/js/jquery.dataTables.js',
  vendorPath + 'datatables-responsive/js/dataTables.responsive.js',
  vendorPath + 'datatables-tabletools/js/dataTables.tableTools.js',
  vendorPath + 'datatables-colreorder/js/dataTables.colRedorder.js',
  vendorPath + 'datatables-colvis/js/dataTables.colVis.js',
  vendorPath + 'jquery-datatables-column-filter/jquery.dataTables.columnFilter.js',
  vendorPath + 'datatables-fixedcolumns/js/dataTables.fixedColumns.js',
  vendorPath + 'datatables-fixedheader/js/dataTables.fixedHeader.js'
];

gulp.task('bower', function(cb) {
 return gulp.src('')
  .pipe($.run('bower install -q --allow-root'))
})

gulp.task('datatable', ['bower'], function() {
  return gulp.src(paths)
    .pipe($.concat('brecTables.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('install', ['datatable']);