/* jshint node: true */

'use strict';

function getTaskConfig(projectConfig) {
	var taskConfig = {
			build: {
				src: projectConfig.dirs.dest,
				dest: projectConfig.dirs.build
			},
			fonts: {
				src: projectConfig.paths.src['copy-assets'].fonts,
				dest: projectConfig.paths.dest['copy-assets'].fonts
			},
			media: {
				src: projectConfig.paths.src['copy-assets'].media,
				dest: projectConfig.paths.dest['copy-assets'].media
			}
	};

	return taskConfig;
}

module.exports = getTaskConfig;
