'use strict';

// Package config
var packageConfig = require('../package.json');

// Node utils
var cartridgeUtil = require('cartridge-module-util')(packageConfig);
var path          = require('path');

var TASK_NAME = 'base';

function projectConfigDeletePaths(config) {
	delete config.paths.src[TASK_NAME]
	delete config.paths.dest[TASK_NAME]

	return config;
}

// Run through module uninstallation
cartridgeUtil.removeFromRc()
	.then(function() {
		return cartridgeUtil.modifyProjectConfig(projectConfigDeletePaths);
	})
	.then(function() {
		return cartridgeUtil.removeModuleConfig(path.resolve('_config', 'task.' + TASK_NAME + '.js'));
	})
	.then(cartridgeUtil.finishUninstall)
