'use strict';

// Package config
var packageConfig = require('../package.json');

// Node utils
var cartridgeUtil = require('cartridge-module-util')(packageConfig);
var path          = require('path');

var TASK_NAME = 'copy-assets';

// Transform function for adding paths
function projectConfigAddPaths(config) {
	config.paths.src[TASK_NAME] = {
		fonts: config.dirs.src + '/fonts/',
		media: config.dirs.src + '/media/'
	};

	config.paths.dest[TASK_NAME] = {
		fonts: config.dirs.dest + '/fonts/',
		media: config.dirs.dest + '/media/'
	};

	return config;
}

// Exit if NODE_ENV is development
cartridgeUtil.exitIfDevEnvironment();
// Make sure that the .cartridgerc file exists
cartridgeUtil.ensureCartridgeExists();
// Run through the project setup
cartridgeUtil.addToRc()
	.then(function() {
		return cartridgeUtil.modifyProjectConfig(projectConfigAddPaths);
	})
	.then(function(){
		return cartridgeUtil.addModuleConfig(path.resolve('_config', 'task.' + TASK_NAME + '.js'));
	})
	.then(cartridgeUtil.finishInstall);
