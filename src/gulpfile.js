var gulp = require("gulp");
var gutil = require("gulp-util");
var sass = require("gulp-ruby-sass");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var pipe = require("gulp-pipe");
var notify = require("gulp-notify");
var vendors = [
		"./Boilerplate.Web/js/external/bootstrap/dist/js/bootstrap.js"
	];

gulp.task("sass", function(){
	gulp.src('./Boilerplate.Web/Content/*.scss')
		.pipe(sass({
			noCache: true,
			style: 'expanded',
			lineNumbers: true,
			loadPath: './Boilerplate.Web/Content/*'
		}))
		.pipe(gulp.dest('./Boilerplate.Web/Content')).
		pipe(notify({message: 'Vendor js done.'}));
});

gulp.task("js", function(){
	gulp.src(vendors).
		//pipe(uglify())
		pipe(concat("vendor.js")).
		pipe(gulp.dest("./Boilerplate.Web/js")).
		pipe(notify({message: "Vendor js done."}));
});

gulp.task("watch", function(){
	gulp.watch("./Boilerplate.Web/Content/*.scss", function(){
		gulp.run("sass");
	});
	
	gulp.watch("./Boilerplate.Web/js/*.js", function(){
		gulp.run("js");
	});
});
gulp.task("default", ["js", "watch"]);