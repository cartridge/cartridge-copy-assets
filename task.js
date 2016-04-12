'use strict';
/* ============================================================ *\
	 MODULE NAME
\* ============================================================ */

// Gulp dependencies
var path = require('path');

// Module dependencies


module.exports = function(gulp, projectConfig, tasks) {

	/* --------------------
	*	CONFIGURATION
	* ---------------------*/

	var TASK_NAME = 'copy-assets';

	// Task Config
	var taskConfig = require(path.resolve(process.cwd(), projectConfig.dirs.config, 'task.' + TASK_NAME + '.js'))(projectConfig);
	var copyTasksArr = [];
	/* --------------------
	*	MODULE TASKS
	* ---------------------*/

	Object.keys(taskConfig).forEach(function(key) {
		gulp.task(TASK_NAME + ':' + key, function() {
				return gulp.src([taskConfig[key].src + '**/*'])
				.pipe(gulp.dest(taskConfig[key].dest));
		});

		copyTasksArr.push(TASK_NAME + ':' + key);
	});


	gulp.task(TASK_NAME, copyTasksArr);

	/* --------------------
	*	WATCH TASKS
	* ---------------------*/

	gulp.task('watch:' + TASK_NAME, function () {
		gulp.watch(
			taskConfig.watch,
			[TASK_NAME]
		);
	});

	/* ----------------------------
	*	CARTRIDGE TASK MANAGEMENT
	* -----------------------------*/

	// Add the clean path for the generated styles
	projectConfig.cleanPaths.push(projectConfig.paths.dest[TASK_NAME]);
	// Add the task to the default list
	tasks.default.push(TASK_NAME);
	// Add the task to the watch list
	tasks.watch.push('watch:' + TASK_NAME);
}
