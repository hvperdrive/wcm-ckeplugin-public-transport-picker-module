"use strict";

var _ = require("lodash");
var fs = require("fs");
var gulp = require("gulp");
var angularTemplatecache = require("gulp-angular-templatecache");
var replace = require("gulp-replace");
var packageConfig = JSON.parse(fs.readFileSync("./package.json"));

var name = _.get(packageConfig, "wcmModule.moduleConfig.angularModule", "");

gulp.task("templateCache", function() {
	return gulp.src("./public/app/**/*.template.html")
		.pipe(angularTemplatecache({
			module: name + "_" + packageConfig.version,
			root: "app/modules/" + name + "_" + packageConfig.version + "/public/app/",
		}))
		.pipe(gulp.dest("./public/app/template-cache"));
});

// Utility function for bumping the version at the desired level in the package.json file.
var bumpVersion = function bumpVersion(level) {
	var versionArr = packageConfig.version.split(".");

	versionArr[level] = "" + (parseInt(versionArr[level]) + 1);

	for (level += 1; level < versionArr.length; level++) {
		versionArr[level] = 0;
	}

	packageConfig.version = versionArr.join(".");

	fs.writeFileSync("./package.json", JSON.stringify(packageConfig, null, 4));

	return packageConfig.version;
};

var bumpAngularModuleVersion = function bumpAngularModuleVersion(version) {
	var reg = new RegExp("\"" + name + "_[0-9]{1,}\\.[0-9]{1,}\\.[0-9]{1,}", "g");
	var reg2 = new RegExp("version: \"[0-9]{1,}\.[0-9]{1,}\.[0-9]{1,}\",", "g");


	return gulp.src(["./public/app/**/*.js"])
		.pipe(replace(reg, "\"" + name + "_" + version))
		.pipe(replace(reg2, "version: \"" + version + "\","))
		.pipe(gulp.dest("./public/app"));

};

// Bump patch version (x.x.[patch version])
gulp.task("bumpPatch", function() {
	var newVersion = bumpVersion(2);

	return bumpAngularModuleVersion(newVersion);
});
// Bump minor version(x.[minor version].x)
gulp.task("bumpMinor", function() {
	var newVersion = bumpVersion(1);

	return bumpAngularModuleVersion(newVersion);
});
// Bump major version([magjor version].x.x)
gulp.task("bumpMajor", function() {
	var newVersion = bumpVersion(0);

	return bumpAngularModuleVersion(newVersion);
});
